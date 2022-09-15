import { AppSync, Pool } from "@bitmatrix/models";
import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import { calcPrice } from "../helper";
import { Price } from "../model/Price";

// export const DB_SOCKET_SERVER_URL = "https://db.basebitmatrix.com/";
export const API_SOCKET_SERVER_URL = "//127.0.0.1:9901/";
export const DB_SOCKET_SERVER_URL = "//127.0.0.1:4499/";

export const useDatabase = () => {
  const [databaseIsConnected, setDatabaseIsConnected] = useState<boolean>(false);
  const [statusData, setStatusData] = useState<AppSync>();
  const [priceses, setPriceses] = useState<Price[]>();
  const [statusLoading, setStatusLoading] = useState<boolean>(true);
  const [pricesesLoading, setPricesesLoading] = useState<boolean>(true);

  const onStatusData = useCallback((data: any) => {
    setStatusData(data);
    setStatusLoading(false);
  }, []);

  const onPoolsData = useCallback((data: Pool[]) => {
    const priceses = calcPrice(data);
    setPriceses(priceses);
    setPricesesLoading(false);
  }, []);

  useEffect(() => {
    const socket = io(DB_SOCKET_SERVER_URL);

    socket.on("connect", () => {
      console.log("connect");
      setDatabaseIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
      setDatabaseIsConnected(false);
    });

    socket.on("appSync", (data) => {
      if (data) onStatusData(data);
    });

    socket.on("pools", (data: Pool[]) => {
      if (data) onPoolsData(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      setDatabaseIsConnected(false);
      console.log("cleanup");
    };
  }, [onPoolsData, onStatusData]);

  return {
    databaseIsConnected,
    statusLoading,
    statusData,
    priceses,
    pricesesLoading,
  };
};
