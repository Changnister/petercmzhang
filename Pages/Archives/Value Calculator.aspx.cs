using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Portfolio_Website___C_Sharp.Pages
{
    public partial class Calculator : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        protected void Clear_Click(object sender, EventArgs e)
        {
            txtNum1.Value = "";
            txtNum2.Value = "";
            txtNum3.Value = "";
            txtResult.Value = "";
        }



        protected void Sum_Click(object sender, EventArgs e)
        {
          
            double b = 0.00;
            b = Convert.ToDouble(txtNum2.Value);
            double c = 0.00;
            c = Convert.ToDouble(txtNum3.Value);
  

            double FV = Double.Parse(txtNum1.Value) * (Math.Pow((1 + Double.Parse(txtNum2.Value)/100), Double.Parse(txtNum3.Value)));

       
            txtResult.Value = Convert.ToString(FV);

        }
    }

}