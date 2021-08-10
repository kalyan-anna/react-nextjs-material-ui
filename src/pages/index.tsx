import { useAppDispatch, useAppSelector } from "../store";

import { expoSelectors } from "../store/expo/selectors";
import { loadEstablishments } from "../store/expo";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const establishments = useAppSelector(expoSelectors.establishments);

  useEffect(() => {
    dispatch(loadEstablishments());
  }, [dispatch]);

  return (
    <>
      <div>landing page</div>
      {establishments.map((est) => (
        <div key={est.id}>{est.name}</div>
      ))}
    </>
  );
}
