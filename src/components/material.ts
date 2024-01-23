/* eslint-disable import/max-dependencies */
// +re-export from @mui/material

import { default as AlertComponent } from '@mui/material/Alert';
import { default as AppBarComponent } from '@mui/material/AppBar';
import { default as AvatarComponent } from '@mui/material/Avatar';
import { default as BadgeComponent } from '@mui/material/Badge';
import { default as BoxComponent } from '@mui/material/Box';
import { default as ButtonComponent } from '@mui/material/Button';
import { default as CardComponent } from '@mui/material/Card';
import { default as CardContentComponent } from '@mui/material/CardContent';
import { default as CardHeaderComponent } from '@mui/material/CardHeader';
import { default as CheckboxComponent } from '@mui/material/Checkbox';
import { default as ChipComponent } from '@mui/material/Chip';
import { default as CircularProgressComponent } from '@mui/material/CircularProgress';
import { default as ClickAwayListenerComponent } from '@mui/material/ClickAwayListener';
import { default as CollapseComponent } from '@mui/material/Collapse';
import { default as CssBaselineComponent } from '@mui/material/CssBaseline';
import { default as DividerComponent } from '@mui/material/Divider';
import { default as DrawerComponent } from '@mui/material/Drawer';
import { default as FabComponent } from '@mui/material/Fab';
import { default as FadeComponent } from '@mui/material/Fade';
import { default as FormControlLabelComponent } from '@mui/material/FormControlLabel';
import { default as GlobalStylesComponent } from '@mui/material/GlobalStyles';
import { default as GridComponent } from '@mui/material/Grid';
import { default as IconButtonComponent } from '@mui/material/IconButton';
import { default as InputAdornmentComponent } from '@mui/material/InputAdornment';
import { default as ListComponent } from '@mui/material/List';
import { default as ListItemComponent } from '@mui/material/ListItem';
import { default as ListItemButtonComponent } from '@mui/material/ListItemButton';
import { default as ListItemIconComponent } from '@mui/material/ListItemIcon';
import { default as ListSubheaderComponent } from '@mui/material/ListSubheader';
import { default as MenuComponent } from '@mui/material/Menu';
import { default as MenuItemComponent } from '@mui/material/MenuItem';
import { default as PaperComponent } from '@mui/material/Paper';
import { default as RadioComponent } from '@mui/material/Radio';
import { default as RadioGroupComponent } from '@mui/material/RadioGroup';
import { default as StackComponent } from '@mui/material/Stack';
import { default as SwipeableDrawerComponent } from '@mui/material/SwipeableDrawer';
import { default as SwitchComponent } from '@mui/material/Switch';
import { default as ToolbarComponent } from '@mui/material/Toolbar';
import { default as TypographyComponent } from '@mui/material/Typography';
import { default as ZoomComponent } from '@mui/material/Zoom';
import { createTheme, responsiveFontSizes, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import { default as useMediaQueryHook } from '@mui/material/useMediaQuery';
import { default as useScrollTriggerHook } from '@mui/material/useScrollTrigger';

import type { ComponentsPropsList, PaletteMode } from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import type { AppBarProps } from '@mui/material/AppBar';
import type { AvatarProps } from '@mui/material/Avatar';
import type { BadgeProps } from '@mui/material/Badge';
import type { BoxProps } from '@mui/material/Box';
import type { ButtonProps } from '@mui/material/Button';
import type { CardProps } from '@mui/material/Card';
import type { CardContentProps } from '@mui/material/CardContent';
import type { CardHeaderProps } from '@mui/material/CardHeader';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { ChipProps } from '@mui/material/Chip';
import type { CircularProgressProps } from '@mui/material/CircularProgress';
import type { ClickAwayListenerProps } from '@mui/material/ClickAwayListener';
import type { CollapseProps } from '@mui/material/Collapse';
import type { DividerProps } from '@mui/material/Divider';
import type { DrawerProps } from '@mui/material/Drawer';
import type { FabProps } from '@mui/material/Fab';
import type { FadeProps } from '@mui/material/Fade';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
import type { GridProps } from '@mui/material/Grid';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { InputAdornmentProps } from '@mui/material/InputAdornment';
import type { ListProps } from '@mui/material/List';
import type { ListItemProps } from '@mui/material/ListItem';
import type { ListItemButtonProps } from '@mui/material/ListItemButton';
import type { ListItemIconProps } from '@mui/material/ListItemIcon';
import type { ListSubheaderProps } from '@mui/material/ListSubheader';
import type { MenuProps } from '@mui/material/Menu';
import type { MenuItemProps } from '@mui/material/MenuItem';
import type { PaperProps } from '@mui/material/Paper';
import type { RadioProps } from '@mui/material/Radio';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import type { StackProps } from '@mui/material/Stack';
import type { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import type { SwitchProps } from '@mui/material/Switch';
import type { ToolbarProps } from '@mui/material/Toolbar';
import type { TypographyProps } from '@mui/material/Typography';
import type { ZoomProps } from '@mui/material/Zoom';
import type { Direction, SxProps, Theme, ThemeOptions } from '@mui/material/styles';

/*
 * The following lines is workaround for warning ts(2604):
 * "JSX element type '*' does not have any construct or call signatures"
 * being thrown when directly importing components using default export from @mui/material
 */
const Alert = AlertComponent as unknown as typeof AlertComponent.default;
const AppBar = AppBarComponent as unknown as typeof AppBarComponent.default;
const Avatar = AvatarComponent as unknown as typeof AvatarComponent.default;
const Badge = BadgeComponent as unknown as typeof BadgeComponent.default;
const Box = BoxComponent as unknown as typeof BoxComponent.default;
const Button = ButtonComponent as unknown as typeof ButtonComponent.default;
const Card = CardComponent as unknown as typeof CardComponent.default;
const CardContent = CardContentComponent as unknown as typeof CardContentComponent.default;
const CardHeader = CardHeaderComponent as unknown as typeof CardHeaderComponent.default;
const Checkbox = CheckboxComponent as unknown as typeof CheckboxComponent.default;
const Chip = ChipComponent as unknown as typeof ChipComponent.default;
const CircularProgress = CircularProgressComponent as unknown as typeof CircularProgressComponent.default;
const ClickAwayListener = ClickAwayListenerComponent as unknown as typeof ClickAwayListenerComponent.default;
const Collapse = CollapseComponent as unknown as typeof CollapseComponent.default;
const CssBaseline = CssBaselineComponent as unknown as typeof CssBaselineComponent.default;
const Divider = DividerComponent as unknown as typeof DividerComponent.default;
const Drawer = DrawerComponent as unknown as typeof DrawerComponent.default;
const Fab = FabComponent as unknown as typeof FabComponent.default;
const Fade = FadeComponent as unknown as typeof FadeComponent.default;
const FormControlLabel = FormControlLabelComponent as unknown as typeof FormControlLabelComponent.default;
const GlobalStyles = GlobalStylesComponent as unknown as typeof GlobalStylesComponent.default;
const Grid = GridComponent as unknown as typeof GridComponent.default;
const IconButton = IconButtonComponent as unknown as typeof IconButtonComponent.default;
const InputAdornment = InputAdornmentComponent as unknown as typeof InputAdornmentComponent.default;
const List = ListComponent as unknown as typeof ListComponent.default;
const ListItem = ListItemComponent as unknown as typeof ListItemComponent.default;
const ListItemButton = ListItemButtonComponent as unknown as typeof ListItemButtonComponent.default;
const ListItemIcon = ListItemIconComponent as unknown as typeof ListItemIconComponent.default;
const ListSubheader = ListSubheaderComponent as unknown as typeof ListSubheaderComponent.default;
const Menu = MenuComponent as unknown as typeof MenuComponent.default;
const MenuItem = MenuItemComponent as unknown as typeof MenuItemComponent.default;
const Paper = PaperComponent as unknown as typeof PaperComponent.default;
const Radio = RadioComponent as unknown as typeof RadioComponent.default;
const RadioGroup = RadioGroupComponent as unknown as typeof RadioGroupComponent.default;
const Stack = StackComponent as unknown as typeof StackComponent.default;
const SwipeableDrawer = SwipeableDrawerComponent as unknown as typeof SwipeableDrawerComponent.default;
const Switch = SwitchComponent as unknown as typeof SwitchComponent.default;
const Toolbar = ToolbarComponent as unknown as typeof ToolbarComponent.default;
const Typography = TypographyComponent as unknown as typeof TypographyComponent.default;
const Zoom = ZoomComponent as unknown as typeof ZoomComponent.default;
const useMediaQuery = useMediaQueryHook as unknown as typeof useMediaQueryHook.default;
const useScrollTrigger = useScrollTriggerHook as unknown as typeof useScrollTriggerHook.default;

export {
  createTheme, responsiveFontSizes, styled, ThemeProvider, useTheme,
  Alert,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  Fab,
  Fade,
  FormControlLabel,
  GlobalStyles,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom
};

export type {
  AlertProps,
  AppBarProps,
  AvatarProps,
  BadgeProps,
  BoxProps,
  ButtonProps,
  CardProps,
  CardContentProps,
  CardHeaderProps,
  CheckboxProps,
  ChipProps,
  CircularProgressProps,
  ClickAwayListenerProps,
  CollapseProps,
  ComponentsPropsList,
  DividerProps,
  DrawerProps,
  FabProps,
  FadeProps,
  FormControlLabelProps,
  GridProps,
  IconButtonProps,
  InputAdornmentProps,
  ListProps,
  ListItemProps,
  ListItemButtonProps,
  ListItemIconProps,
  ListSubheaderProps,
  MenuProps,
  MenuItemProps,
  PaperProps,
  RadioProps,
  RadioGroupProps,
  StackProps,
  SwipeableDrawerProps,
  SwitchProps,
  ToolbarProps,
  TypographyProps,
  Direction,
  PaletteMode,
  SxProps,
  Theme,
  ThemeOptions,
  ZoomProps
};
