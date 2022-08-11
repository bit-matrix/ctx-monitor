import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

export const SOCKET_SERVER_URL = "https://api.basebitmatrix.com/";

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [ctxData, setCtxData] = useState<any>();
  const [ctxHistory, setCtxHistory] = useState<any>();
  const [ctxLoading, setCtxLoading] = useState<boolean>(true);

  const onCtxData = useCallback((data: any) => {
    console.log(data);
    setCtxData(data);
    setCtxLoading(false);
  }, []);

  const onCtxHistory = useCallback((data: any) => {
    setCtxHistory(data);
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
      if (data) onCtxData(data);
    });

    socket.on("ctxHistory", (data) => {
      if (data) onCtxHistory(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      setIsConnected(false);
      console.log("cleanup");
    };
  }, [onCtxData, onCtxHistory]);

  return {
    isConnected,
    ctxLoading,
    ctxData,
    ctxHistory,
  };
};
