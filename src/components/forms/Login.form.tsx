import React from "react";
import { Image } from "@chakra-ui/react";
import { Card } from "components";
import { ButtonIcon } from "components";
import GoogleIcon from "assets/icons/ic_google.svg";
import { supabase } from "service/supabase/connection";
import { REACT_APP_REDIRECT_URL_PROD } from "utils/contstant";

const LoginForm: React.FC = () => {
  const handleLogin = async () => {
    await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/sales"
            : REACT_APP_REDIRECT_URL_PROD || "https://sesukamu-pos.vercel.app/sales",
      }
    );
  };

  return (
    <Card boxShadow="sm">
      <ButtonIcon
        bg="gray.700"
        color="white"
        onClick={handleLogin}
        leftIcon={<Image src={GoogleIcon} boxSize="20px" />}
      >
        Masuk Ke Aplikasi
      </ButtonIcon>
    </Card>
  );
};

export default LoginForm;