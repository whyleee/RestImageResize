﻿using System;
using System.Web.Mvc;

namespace RestImageResize.WebEPiTest
{
    public class Global : EPiServer.Global
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
        }
    }
}