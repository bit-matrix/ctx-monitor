import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import { DB_SOCKET_SERVER_URL } from "../env";

export const useStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [statusData, setStatusData] = useState<any>();
  const [statusLoading, setStatusLoading] = useState<boolean>(true);

  const onStatusData = useCallback((data: any) => {
    setStatusData(data);
    setStatusLoading(false);
  }, []);

  useEffect(() => {
    const socket = io(DB_SOCKET_SERVER_URL);

    socket.on("connect", () => {
      console.log("connect");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
      setIsConnected(false);
    });

    socket.on("appSync", (data) => {
      if (data) onStatusData(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      setIsConnected(false);
      console.log("cleanup");
    };
  }, [onStatusData]);

  return {
    isConnected,
    statusLoading,
    statusData,
  };
};
