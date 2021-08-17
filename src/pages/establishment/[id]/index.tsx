import { EstablishmentDetail } from "../../../components/EstablishmentDetail";
import React from "react";
import { useRouter } from "next/router";

const EstablishmentPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <EstablishmentDetail id={id as string} />;
};

export default EstablishmentPage;
