import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react"
import { ChevronUp, Database, Cpu, Wallet, Cloud, Activity } from "lucide-react"


function Dashboard() {
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
    const [todayUsers, setTodayUsers] = useState(2300)
    const [walletBalance, setWalletBalance] = useState(53)
    const [cpuUsage, setCpuUsage] = useState(99.87)
  
    // Simulate real-time updates
    useEffect(() => {
      const interval = setInterval(() => {
        setTodayUsers((prev) => prev + Math.floor(Math.random() * 10 - 5))
        setWalletBalance((prev) => Math.max(0, prev + (Math.random() - 0.5) * 2))
        setCpuUsage((prev) => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 0.5)))
      }, 3000)
  
      return () => clearInterval(interval)
    }, [])
  
    // Bar chart data
    const barData = [85, 92, 78, 95, 88, 82, 90, 76, 84, 91, 79, 87]
    const maxBarHeight = Math.max(...barData)
  
    // Projects data
    const projects = [
      {
        id: "12.235.2.33",
        status: "ONLINE",
        cpu: "CPU 16 CORE RAM 16 GB",
        price: "21 USDT",
        usage: 85,
        domain: "GET DOMAIN",
        action: "UP",
        root: "ROOT 79.NHID-CHI10",
      },
      {
        id: "119.12.04.77",
        status: "ONLINE",
        cpu: "CPU 8 CORE RAM 2 GB",
        price: "1 USDT",
        usage: 15,
        domain: "GET DOMAIN",
        action: "UP",
        root: "ROOT 19.NHID-CHI11",
      },
      {
        id: "68.85.356.70",
        status: "ONLINE",
        cpu: "CPU 16 CORE RAM 8 GB",
        price: "28 USDT",
        usage: 100,
        domain: "GET DOMAIN",
        action: "UP",
        root: "ROOT 55.NHID-CHI12",
      },
      {
        id: "10.67.52.11",
        status: "ONLINE",
        cpu: "CPU 8 CORE RAM 4 GB",
        price: "21 USDT",
        usage: 100,
        domain: "YTUNP.ORG",
        action: "UP",
        root: "ROOT 03.NHID-CHI13",
      },
      {
        id: "31.31.08.63",
        status: "ONLINE",
        cpu: "CPU 8 CORE RAM 2 GB",
        price: "14 USDT",
        usage: 23,
        domain: "GET DOMAIN",
        action: "UP",
        root: "ROOT 55.NHID-CHI14",
      },
      {
        id: "85.53.21.10",
        status: "ONLINE",
        cpu: "CPU 16 CORE RAM 48 GB",
        price: "45 USDT",
        usage: 60,
        domain: "HULL.COM",
        action: "UP",
        root: "ROOT 55.NHID-CHI15",
      },
    ]
  
    // Backup files data
    const backupFiles = [
      { name: "42.66.4.77", size: "2.66 GB", time: "20 Dec 7:01 PM" },
      { name: "12.31.45.66", size: "1.2 GB", time: "19 Dec 11:30 AM" },
      { name: "21.31.122.3", size: "890 MB", time: "18 Dec 9:45 AM" },
      { name: "32.101.45", size: "1.5 GB", time: "17 Dec 3:22 PM" },
      { name: "45.22.11.88", size: "750 MB", time: "16 Dec 6:41 PM" },
    ]
  
  

    return( 
        <div className="dashboard h-screen overflow-y-auto">
        <Sidebar sideItems={menu} iscart={cart}/>
        <Header title={title} menuItems={menu2}/>
       <div className="pt-28 pl-[300px]">
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Active Users - Spans 2 columns */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="mb-4">
              <h3 className="text-white text-lg font-semibold mb-1">Active Users</h3>
              <p className="text-blue-400 text-sm">+23% from last week</p>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end justify-between h-20 mb-4">
              {barData.map((height, index) => (
                <div key={index} className="flex-1 mx-0.5">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm transition-all duration-500"
                    style={{ height: `${(height / maxBarHeight) * 100}%` }}
                  />
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Activity className="w-4 h-4 text-blue-400 mr-1" />
                  <span className="text-xs text-blue-400">Users</span>
                </div>
                <div className="text-white font-bold">32,864</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Database className="w-4 h-4 text-blue-400 mr-1" />
                  <span className="text-xs text-blue-400">Clicks</span>
                </div>
                <div className="text-white font-bold">2.42m</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Wallet className="w-4 h-4 text-blue-400 mr-1" />
                  <span className="text-xs text-blue-400">Revenue</span>
                </div>
                <div className="text-white font-bold">32 USDT</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <ChevronUp className="w-4 h-4 text-blue-400 mr-1" />
                  <span className="text-xs text-blue-400">Other</span>
                </div>
                <div className="text-white font-bold">6</div>
              </div>
            </div>
          </div>

          {/* Today's Users */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="text-center">
              <p className="text-blue-400 text-sm mb-2">Today's Users</p>
              <div className="text-2xl font-bold text-white mb-1">{todayUsers.toLocaleString()}</div>
              <div className="text-green-400 text-sm">+5%</div>
            </div>
          </div>

          {/* Cloud Storage */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-semibold">CLOUD</span>
              </div>
              <p className="text-blue-400 text-xs mb-4">PRO</p>

              {/* Circular Progress */}
              <div className="relative w-16 h-16 mx-auto mb-3">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="4" fill="none" />
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 25}`}
                    strokeDashoffset={`${2 * Math.PI * 25 * (1 - 0.95)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">95%</span>
                </div>
              </div>

              <div className="text-xs text-blue-400 space-y-1">
                <div>487 GB</div>
                <div>512 GB</div>
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="text-center">
              <p className="text-blue-400 text-sm mb-2">WALLET</p>
              <div className="text-2xl font-bold text-white mb-1">{walletBalance.toFixed(0)} USDT</div>
              <div className="text-green-400 text-sm">+1% DAY</div>
              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-lg transition-colors">
                COPY USDT ADDRESS
              </button>
            </div>
          </div>

          {/* CPU */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-semibold">CPU</span>
              </div>
              <p className="text-blue-400 text-xs mb-2">PROCESSOR</p>
              <p className="text-white text-sm font-semibold mb-3">1 CORE GOLD</p>
              <p className="text-blue-400 text-xs mb-3">26.29 GB</p>

              {/* CPU Usage Circle */}
              <div className="relative w-16 h-16 mx-auto">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="25" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="4" fill="none" />
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    stroke="#22C55E"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 25}`}
                    strokeDashoffset={`${2 * Math.PI * 25 * (1 - cpuUsage / 100)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{cpuUsage.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-green-400 text-xs mt-2">ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Board - Area Chart */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-1">Active board</h3>
              <p className="text-blue-400 text-sm">Real-time activity</p>
            </div>

            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                  </linearGradient>
                </defs>

                <path d="M0,80 Q10,70 20,75 T40,65 T60,70 T80,60 T100,65 L100,100 L0,100 Z" fill="url(#areaGradient)" />
                <path d="M0,60 Q15,50 30,55 T60,45 T80,50 T100,45 L100,100 L0,100 Z" fill="rgba(37, 99, 235, 0.6)" />
                <path d="M0,40 Q20,30 40,35 T80,25 T100,30 L100,100 L0,100 Z" fill="rgba(29, 78, 216, 0.4)" />

                {/* Data points */}
                <circle cx="85" cy="25" r="1.5" fill="white" />
                <circle cx="95" cy="35" r="1.5" fill="white" />
              </svg>

              {/* Axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-blue-400 py-2">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>

              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-blue-400">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </div>

          {/* Backup Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="mb-4">
              <h3 className="text-white text-lg font-semibold mb-1">BACKUP</h3>
              <p className="text-green-400 text-sm">● 24/7/365</p>
            </div>

            <div className="space-y-3">
              {backupFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <div className="text-white text-sm font-medium">{file.name}</div>
                      <div className="text-blue-400 text-xs">{file.size}</div>
                      <div className="text-blue-400 text-xs">{file.time}</div>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors">
                    GET BACKUP
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white text-lg font-semibold mb-1">Projects</h3>
              <p className="text-blue-400 text-sm">● 6 IP ADRESS</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-blue-400 text-sm border-b border-slate-700">
                  <th className="text-left py-3">CONNECT</th>
                  <th className="text-left py-3">STATUS</th>
                  <th className="text-left py-3">CPU</th>
                  <th className="text-left py-3">PRICE</th>
                  <th className="text-left py-3">USAGE</th>
                  <th className="text-left py-3">DOMAIN</th>
                  <th className="text-left py-3">ACTION</th>
                  <th className="text-left py-3">ROOT</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-white text-sm">{project.id}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">{project.status}</span>
                    </td>
                    <td className="py-4 text-white text-sm">{project.cpu}</td>
                    <td className="py-4 text-white text-sm">{project.price}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-20 bg-slate-700 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.usage}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm">{project.usage}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors">
                        {project.domain}
                      </button>
                    </td>
                    <td className="py-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded transition-colors">
                        {project.action}
                      </button>
                    </td>
                    <td className="py-4 text-blue-400 text-sm">{project.root}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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