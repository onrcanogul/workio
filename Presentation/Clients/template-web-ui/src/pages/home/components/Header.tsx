import React, { useEffect } from "react";
import { Menu, Container, Icon, Dropdown } from "semantic-ui-react";
import theme from "../../../utils/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";

const HeaderComponent: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Redux'tan kullanıcı bilgilerini al
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <Menu
      fixed="top"
      inverted
      size="large"
      style={{
        background: "#4C585B",
        padding: theme.spacing.padding,
      }}
    >
      <Container>
        <Menu.Item header>
          <Icon
            name="coffee"
            size="large"
            style={{ color: theme.colors.text }}
          />
          <span style={{ color: theme.colors.text }}>
            {isAuthenticated && user ? `Workio - ${user.username}` : "Workio"}
          </span>
        </Menu.Item>

        <Menu.Item position="right">
          <Dropdown
            text={localStorage.getItem("language").toUpperCase() ?? "Language"}
            placeholder={t("language") || "Language"}
            pointing
            className="link item"
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("tr")}>
                Türkçe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default HeaderComponent;
