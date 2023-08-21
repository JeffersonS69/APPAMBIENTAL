import { useState } from "react";
import { useQueries } from "react-query";

export const useClimas = () => {
  const [esmeraldas, setEsmeraldas] = useState({});
  const [Quito, setQuito] = useState({});
  const [Manta, setManta] = useState({});
  const [Guayaquill, setGuayaquill] = useState({});
  const [SantoD, setSantoD] = useState({});
  const [Cuenca, setCuenca] = useState({});
  const [Ibarra, setIbarra] = useState({});

  const fetchWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e88d05e7ec9821a184585f0a40c87218`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  };

  const queries = useQueries([
    {
      queryKey: ["Esmeraldas"],
      queryFn: () => fetchWeatherData("Hacienda"),
      onSuccess: (res) => setEsmeraldas(res),
    },
    {
      queryKey: ["Quito"],
      queryFn: () => fetchWeatherData("Quito"),
      onSuccess: (res) => {
        setQuito(res);
      },
    },
    {
      queryKey: ["Manta"],
      queryFn: () => fetchWeatherData("Manta"),
      onSuccess: (res) => {
        setManta(res);
      },
    },
    {
      queryKey: ["Guaya"],
      queryFn: () => fetchWeatherData("Guayaquil"),
      onSuccess: (res) => {
        setGuayaquill(res);
      },
    },
    {
      queryKey: ["SantoDomin"],
      queryFn: () => fetchWeatherData("Santo Domingo de los Colorados"),
      onSuccess: (res) => {
        setSantoD(res);
      },
    },
    {
      queryKey: ["Cuenca"],
      queryFn: () => fetchWeatherData("Cuenca"),
      onSuccess: (res) => {
        setCuenca(res);
      },
    },
    {
      queryKey: ["Ibarra"],
      queryFn: () => fetchWeatherData("Ibarra"),
      onSuccess: (res) => {
        setIbarra(res);
      },
    },
  ]);

  return {
    isError: queries.some((query) => query.isError),
    esmeraldas,
    Quito,
    Manta,
    Guayaquill,
    SantoD,
    Cuenca,
    Ibarra,
  };
};
