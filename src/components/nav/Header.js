import React from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
//import useCurrentItemHeader from "../../hooks/useCurrentItemHeader";

const { SubMenu, Item } = Menu;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart, header, user } = useSelector((state) => ({ ...state }));

  return (
   <div>Hello am Header!</div>
  );
};

export default Header;
