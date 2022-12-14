import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

// export const API_SOCKET_SERVER_URL = "https://api.basebitmatrix.com/";
// export const DB_SOCKET_SERVER_URL = "https://db.basebitmatrix.com/";

export const API_SOCKET_SERVER_URL = "//127.0.0.1:9901/";
export const DB_SOCKET_SERVER_URL = "//127.0.0.1:4499/";

export const useHistory = () => {
  const [historyIsConnected, setHistoryIsConnected] = useState<boolean>(false);
  const [ctxData, setCtxData] = useState<any>();
  const [ctxHistory, setCtxHistory] = useState<any>();
  const [ctxLoading, setCtxLoading] = useState<boolean>(true);
  const [charts, setCharts] = useState<any>();

  const onCtxData = useCallback((data: any) => {
    setCtxData(data);
    setCtxLoading(false);
  }, []);

  const onCtxHistory = useCallback((data: any) => {
    setCtxHistory(data);
  }, []);

  const onCharts = useCallback((data: any) => {
    setCharts(data);
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

    socket.on("poolschart", (data) => {
      if (data) onCharts(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      setHistoryIsConnected(false);
      console.log("cleanup");
    };
  }, [onCharts, onCtxData, onCtxHistory]);

  return {
    historyIsConnected,
    ctxLoading,
    ctxData,
    ctxHistory,
    charts,
  };
};
