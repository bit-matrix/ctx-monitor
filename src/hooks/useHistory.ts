import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import { API_SOCKET_SERVER_URL } from "../env";

export const useHistory = () => {
  const [historyIsConnected, setHistoryIsConnected] = useState<boolean>(false);
  const [ctxData, setCtxData] = useState<any>();
  const [ctxHistory, setCtxHistory] = useState<any>();
  const [ctxLoading, setCtxLoading] = useState<boolean>(true);

  const onCtxData = useCallback((data: any) => {
    setCtxData(data);
    setCtxLoading(false);
  }, []);

  const onCtxHistory = useCallback((data: any) => {
    setCtxHistory(data);
  }, []);

  useEffect(() => {
    const socket = io(API_SOCKET_SERVER_URL);

    socket.on("connect", () => {
      console.log("connect");
      setHistoryIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
      setHistoryIsConnected(false);
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
      setHistoryIsConnected(false);
      console.log("cleanup");
    };
  }, [onCtxData, onCtxHistory]);

  return {
    historyIsConnected,
    ctxLoading,
    ctxData,
    ctxHistory,
  };
};
