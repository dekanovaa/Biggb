import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";
import "./Dashboard.css";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/cart/Cart"
import { Button } from "../../components/Button"
import { Badge } from "../../components/Badge"
import { Progress } from "../../components/Progress"
import { HardDrive, Cpu, Shield, MoreHorizontal } from "../../components/Icons"
import { CircularProgress } from "../../components/CircularProgress"



function Dashboard() {
    // Sample data for the bar chart
    // const chartData = [320, 250, 120, 300, 450, 420, 480, 300, 180]
    // const maxValue = Math.max(...chartData)
    const menu = {
        dashboard: "Dashboard",
        tables: "Tables",
        billing: "Billing",
        web: "WEB CONNECT",
        profile: "Profile",
        storage:"STORAGE",
        sign: "Sign Up"
    }
    let cart = true;
    let title = {
        page: "My servers",
        subtitle: "Analitics Dashboard"
    }
    const menu2 = {
      server: "GET SERVER",
      wallet: "PROFILE",
      cloud: "CLOUD",
      signin: "SIGN IN",
    };
    // 
    const backupData = [
      { id: "24/7/365", ip: "42.66.4.77", time: "22 DEC 7:20 PM", status: "success" },
      { id: "12.31.45.66", time: "21 DEC 11:21 PM", status: "error" },
      { id: "21.31.122.3", time: "21 DEC 9:28 PM", status: "info" },
      { id: "32.101.45", time: "20 DEC 3:52 PM", status: "warning" },
      { id: "33.56.73.33", time: "18 DEC 4:41 PM", status: "adobe" },
    ]
  
    const projectData = [
      { ip: "12.233.2.33", specs: "CPU 12 CORE RAM 18 GB", cost: "21 USDT", load: 60, status: "online" },
      { ip: "313.12.26.77", specs: "CPU 2 CORE RAM 2 GB", cost: "1 USDT", load: 10, status: "online" },
      { ip: "65.45.356.70", specs: "CPU 16 CORE RAM 8 GB", cost: "25 USDT", load: 100, status: "online" },
      {
        ip: "50.62.32.11",
        specs: "CPU 8 CORE RAM 4 GB",
        cost: "21 USDT",
        load: 100,
        status: "online",
        domain: "YUUIP.ORG",
      },
      { ip: "31.31.06.43", specs: "CPU 4 CORE RAM 2 GB", cost: "14 USDT", load: 25, status: "online" },
      { ip: "95.53.21.10", specs: "CPU 18 CORE RAM 48 GB", cost: "45 USDT", load: 40, status: "online" },
    ]
  
    
  
  

    return( 
        <div className="dashboard h-screen overflow-y-auto">
        <Sidebar sideItems={menu} iscart={cart}/>
        <Header title={title} menuItems={menu2}/>
       <div className="pt-28 pl-[300px]">
       <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6"
      
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-white">
              <div className="text-sm opacity-75">Today's Users</div>
              <div className="text-2xl font-bold flex items-center gap-2">
                2,300
                <span className="text-red-400 text-sm">-5%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white text-right">
              <div className="text-sm opacity-75">WALLET</div>
              <div className="text-xl font-bold flex items-center gap-2">
                53 USDT
                <span className="text-green-400 text-sm">+12 DAY</span>
              </div>
            </div>
            <Button>GET NEW PANEL</Button>
          </div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Users Chart */}
          <Card className="text-white lg:col-span-1">
            <CardHeader>
              <CardTitle>
                <div>
                  <div className="text-lg">Active Users</div>
                  <div className="text-green-400 text-sm">(+23) than last week</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Simple bar chart representation */}
                <div className="flex items-end justify-between h-32 gap-2">
                  {[30, 25, 15, 35, 50, 45, 55, 35, 20].map((height, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 rounded-t w-4 transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Users</span>
                    <span className="font-bold">32,984</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Clicks</span>
                    <span className="font-bold">2.42m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>DAV</span>
                    <span className="font-bold">32 USDT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>IP</span>
                    <span className="font-bold">6</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cloud Storage */}
          <Card className="text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive />
                CLOUD
                <Badge variant="secondary" className="bg-blue-600">
                  Pro
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <CircularProgress value={95} size={128}>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-xs opacity-75">NVMe SSD</div>
                </div>
              </CircularProgress>
              <div className="flex justify-between w-full text-sm mt-4">
                <span>487 GB</span>
                <span>512 GB</span>
              </div>
            </CardContent>
          </Card>

          {/* CPU Performance */}
          <Card className="text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu />
                  CPU
                </div>
                <MoreHorizontal />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-xs opacity-75">PROCESSOR</div>
                    <div className="font-bold">1 CORE GOLD</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">RAM 32 GB</div>
                    <div className="font-bold">26.29 GB</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <CircularProgress value={99.87} size={96} strokeWidth={6} color="rgb(34 197 94)">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">99.87</div>
                      <div className="text-xs opacity-75">IDEAL</div>
                    </div>
                  </CircularProgress>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Board Chart */}
          <Card className="text-white lg:col-span-2">
            <CardHeader>
              <CardTitle>
                Active board
                <div className="text-green-400 text-sm">(+5) more in today</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  {[0, 50, 100, 150, 200].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="400"
                      y2={y}
                      stroke="rgb(51 65 85)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}

                  {/* Area chart */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  <path d="M0,150 Q50,120 100,140 T200,100 T300,120 T400,80 L400,200 L0,200 Z" fill="url(#gradient1)" />
                  <path
                    d="M0,180 Q50,160 100,170 T200,140 T300,150 T400,130 L400,200 L0,200 Z"
                    fill="url(#gradient2)"
                  />

                  <path
                    d="M0,150 Q50,120 100,140 T200,100 T300,120 T400,80"
                    fill="none"
                    stroke="rgb(59 130 246)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,180 Q50,160 100,170 T200,140 T300,150 T400,130"
                    fill="none"
                    stroke="rgb(34 197 94)"
                    strokeWidth="2"
                  />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs opacity-75 px-4">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backup Status */}
          <Card className="text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield />
                BACKUP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {backupData.map((backup, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        backup.status === "success"
                          ? "bg-green-500"
                          : backup.status === "error"
                            ? "bg-red-500"
                            : backup.status === "info"
                              ? "bg-blue-500"
                              : backup.status === "warning"
                                ? "bg-yellow-500"
                                : "bg-purple-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{backup.ip || backup.id}</div>
                      <div className="text-xs opacity-75">{backup.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Table */}
        <Card className="text-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div>
                Projects
                <div className="text-green-400 text-sm">● 6 IP ADDRESS</div>
              </div>
              <MoreHorizontal />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 text-xs opacity-75 uppercase">
                <span>Companies</span>
                <span></span>
                <span>Day</span>
                <span>CPU Load</span>
                <span></span>
                <span></span>
              </div>

              {projectData.map((project, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 gap-4 items-center py-2 border-b border-slate-700 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded ${
                        i === 0
                          ? "bg-red-500"
                          : i === 1
                            ? "bg-blue-500"
                            : i === 2
                              ? "bg-green-500"
                              : i === 3
                                ? "bg-green-500"
                                : i === 4
                                  ? "bg-blue-500"
                                  : "bg-red-500"
                      }`}
                    ></div>
                    <span className="font-medium">{project.ip}</span>
                  </div>

                  <div className="text-sm opacity-75">{project.specs}</div>

                  <div className="font-medium">{project.cost}</div>

                  <div className="flex items-center gap-2">
                    <span>{project.load}%</span>
                    <Progress value={project.load} className="w-16 h-1" />
                  </div>

                  <Button size="sm" variant="outline" className="text-xs">
                    {project.domain || "GET DOMAIN"}
                  </Button>

                  <div className="text-xs opacity-75">UP</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <footer className="flex items-center justify-between py-7">
            <p className="text-white text-[14px] ">@ 2025, Made with ❤️ </p>
            <div className="flex items-center gap-11"> 
                <p className="text-white text-[14px]">BIG DATA</p>
                <p className="text-white text-[14px]">WALLET</p>
                <p className="text-white text-[14px]">LICENSE</p>
            </div>
        </footer>
       </div>
        </div>
    )
}
export default Dashboard