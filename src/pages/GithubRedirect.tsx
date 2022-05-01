import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GithubRedirect: React.FC = () => {
  window.open("https://github.com/SzelamC");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
  }, []);

  return null;
};
