import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

export const SOCKET_SERVER_URL = "https://api.basebitmatrix.com/";

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const onData = useCallback((data: any) => {
    setData(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on("connect", () => {
      console.log("connect");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
      setIsConnected(false);
    });

    socket.on("redis-values", (data) => {
      if (data) onData(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      setIsConnected(false);
      console.log("cleanup");
    };
  }, [onData]);

  return {
    isConnected,
    loading,
    data,
  };
};
