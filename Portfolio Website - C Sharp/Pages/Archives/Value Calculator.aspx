<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Value Calculator.aspx.cs" Inherits="Portfolio_Website___C_Sharp.Pages.Calculator" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Calculator </title>
    
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-174084882-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-174084882-1');
</script>

    <meta name="image" property="og:image" content="https://peterxzhang.com/images/writing-min.png"/>
    <meta property="og:title" content="Peter Zhang's Portfolio" />
    <meta property="og:url" content="https://peterxzhang.com/Pages/Home" />
    <meta name="author" content="Peter Zhang"/>


    <link rel="shortcut icon" type="image/x-icon" href="~/Images/Logo.png" />
    <link rel="stylesheet" href="~/CSS/Header.css"/>
    <link rel="stylesheet" href="~/CSS/Responsive.css"/>
    <link rel="stylesheet" href="~/CSS/Body.css"/>
     <link rel="stylesheet" href="~/CSS/Footer.css"/>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="HandheldFriendly" content="true"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
</head>

<body>



     <div class="navbar">
        <p style="font-family:'Lucida Bright'">
            <a href='Home'> Home </a>
            <a href='Aboutme'> About Me </a></p>
            <div class="dropdown">
                <button class="dropbtn">
                    Projects
                </button>
                <div class="dropdown-content">
                    <a href="Vaccines">Vaccines and Disease Eradication</a>
                    <a href="V3D PPE">3D-Printing PPE in COVID-19</a>
                    <a href="https://www.instagram.com/diariesofapharmd/">Daily Sketches</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    Tools
                </button>
                <div class="dropdown-content">
                    <a href="Value Calculator.aspx">Calculators</a>
                </div>
            </div>

        <p style="font-family:'Lucida Bright';font-size: 17px">
            <a href='Publications'> Publications </a>
            <a href='Contactme'> Contact Me </a>
        </p>
        <div>
        </div>
    </div>

        <div class="footer">
        <p style="font-family:'Lucida Bright'; font-size:13px;white-space:nowrap;display:inline;">
            ©
            <script>document.write(new Date().getFullYear())</script> Chengming Zhang.  All rights reserved.
        </p>

        <div class="logos">

            <a href="https://www.linkedin.com/in/peterxzhang/">
               <asp:Image ID="logos" runat="server" CssClass="logos" ImageUrl="~/Images/Linkedin Logo.png" /></a>
            &ensp;
            <a href="https://twitter.com/PCMZhang/">
                <asp:Image ID="Image1" runat="server" CssClass="logos" ImageUrl="~/Images/Twitter Logo.png" /></a>
            &ensp;
            <a href="https://www.instagram.com/diariesofapharmd/">
                <asp:Image ID="Image2" runat="server" CssClass="logos" ImageUrl="~/Images/Instagram Logo.png" /></a>

        </div>

    </div>
        <div style="margin: 0px auto 0px auto; width: 400px; padding-top: 15vw";>
                <form id="form1" runat="server">
        <p>
 
        <asp:Label ID="Label1" runat="server" Height="30px" Text="PV (Present Value)" Width="210px"></asp:Label>
        <input id="txtNum1" type="text" runat="server"/><br />
        <asp:Label ID="Label2" runat="server" Height="30px" Text="R (Discount Rate %)" Width="210px"></asp:Label>
        <input id="txtNum2" type="text" runat="server"/>
        <asp:Label ID="Label4" runat="server" Height="30px" Text="T (Periods)" Width="210px"></asp:Label>
        <input id="txtNum3" type="text" runat="server"/><br />
        <asp:Label ID="Label3" runat="server" Height="30px" Text="Resultant FV (Future Value): " Width="210px"></asp:Label>
        <input id="txtResult" type="text" runat="server"/><br />
        <asp:Button ID="Sum" runat="server" Height="30px" OnClick="Sum_Click" Text="Calculate" Width="80px" />
        <asp:Button ID="Clear" runat="server" Height="30px" Text="Clear" Width="80px" OnClick="Clear_Click" />
        </p>
                    <p style="font-size:13px">
                        Disclaimer: This tool has not been validated and is currently in the testing stage. Any action you take upon the information provided by this tool is strictly at your own risk.</p>
    </form>
    </div>

        </body>
</html>
