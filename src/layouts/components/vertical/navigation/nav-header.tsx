import type { FC } from "react";
import { Link } from "react-router-dom";

import { Circle, CircleDot, X as XIcon } from "@nxweb/icons/tabler";

import {
  Box,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@components/material.js";
import type { BoxProps, TypographyProps } from "@components/material.js";
import { config as themeConfig } from "@config/theme.js";
import type { LayoutProps } from "@layouts/types.js";
import logoShop from "@assets/images/pages/shop-svgrepo-com.png";

interface Props {
  readonly collapsedNavWidth: number;
  readonly hidden: LayoutProps["hidden"];
  readonly menuLockedIcon?: LayoutProps["verticalLayoutProps"]["navMenu"]["lockedIcon"];
  readonly menuUnlockedIcon?: LayoutProps["verticalLayoutProps"]["navMenu"]["unlockedIcon"];
  readonly navHover: boolean;
  readonly navigationBorderWidth: number;
  readonly navMenuBranding?: LayoutProps["verticalLayoutProps"]["navMenu"]["branding"];
  readonly saveSettings: LayoutProps["saveSettings"];
  readonly settings: LayoutProps["settings"];
  readonly toggleNavVisibility: () => void;
}

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  minHeight: theme.mixins.toolbar.minHeight,
  paddingRight: theme.spacing(3.5),
  transition: "padding .25s ease-in-out",
}));

const HeaderTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  lineHeight: "24px",
  transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
});

const LinkStyled = styled(Link)({
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
});

// eslint-disable-next-line react/require-default-props
const VerticalNavHeader: FC<Props> = (props) => {
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon,
  } = props;

  const theme = useTheme();
  const { navCollapsed } = settings;
  const menuCollapsedStyles =
    navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0;
      }

      return (collapsedNavWidth - navigationBorderWidth - 34) / 8;
    }

    return 6;
  };

  return (
    <MenuHeaderWrapper
      className="nav-header"
      sx={{ pl: menuHeaderPaddingLeft() }}
    >
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled to="/">
          <img src={logoShop} style={{ height: "24px" }} alt="" />
          <HeaderTitle
            sx={{
              ...menuCollapsedStyles,
              ...(navCollapsed && !navHover ? {} : { ml: 2.5 }),
            }}
            variant="h4"
          >
            {themeConfig.templateName}
          </HeaderTitle>
        </LinkStyled>
      )}

      {hidden ? (
        <IconButton
          disableFocusRipple={true}
          disableRipple={true}
          sx={{
            backgroundColor: "transparent !important",
            color: "text.secondary",
            p: 0,
          }}
          onClick={toggleNavVisibility}
        >
          <XIcon fontSize="1.25rem" />
        </IconButton>
      ) : userMenuLockedIcon === null &&
        userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableFocusRipple={true}
          disableRipple={true}
          sx={{
            backgroundColor: "transparent !important",
            color: "text.primary",
            p: 0,

            "& svg": {
              fontSize: "1.25rem",
              ...menuCollapsedStyles,
              transition: "opacity .25s ease-in-out",
            },
          }}
          onClick={() =>
            saveSettings({ ...settings, navCollapsed: !navCollapsed })
          }
        >
          {navCollapsed
            ? userMenuUnlockedIcon || <Circle />
            : userMenuLockedIcon || <CircleDot />}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  );
};

VerticalNavHeader.displayName = "VerticalNavHeader";

export { VerticalNavHeader };
