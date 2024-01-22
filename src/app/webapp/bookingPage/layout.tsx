"use client";
import NewHeader from "@/component/NewHeader/NewHeader";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";
import Footer from "@/component/root/parts/Footer";
import Header from "@/component/root/parts/Header";
import Hero from "@/component/root/parts/Hero";
import NavBar from "@/component/root/parts/NavBar";
import StoreProvidor from "@/redux/storeProvidor/StoreProvidor";
import { Box, Divider, Paper, Stack } from "@mui/material";
const colorBagroundEffectStyle: any = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  background: "rgba(25,205,255,0.522)",
  filter: "blur(100px)",
  borderRadius: "15px",
  top: "160px",
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
