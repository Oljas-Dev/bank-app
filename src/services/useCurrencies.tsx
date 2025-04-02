export async function getCurrencies() {
  const response = await fetch(
    "https://v1.apiplugin.io/v1/currency/LiSRxweZ/rates?source=EUR",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
