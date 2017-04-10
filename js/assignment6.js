function MenuChoice()
{
    if(document.getElementById("menu").value =="Create Customer")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if(document.getElementById("menu").value =="Update Ship-To Address")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Delete Customer")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {   document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}

//AJAX Request

//---------------------------------------------------------Create customer function
function CreateCustomer()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
        
        //Collect Customer data from web page
        var customerid = document.getElementById("custid").value;
        var customername = document.getElementById("custname").value;
        var customercity = document.getElementById("custcity").value;
        
        //Create the parameter string
        var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult(result);
            
        }
            
        }
        
        //Start AJAX request
        objRequest.open("POST", url, true);
        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        objRequest.send(newcustomer);
        
        }
        
        function OperationResult(output)
        
        {
            if (output.WasSuccessful == 1)
            {
                document.getElementById("result").innerHTML = "Customer was successfully added to the customer list.";
            }
            else
            {
                document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
            }
                
        }
//----------------------------------DeleteCustomerFunction
function DeleteCustomer()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
        url += document.getElementById("custid2").value;
        
        //Collect Customer data from web page
        //var customerid = document.getElementById("custid").value;
        //var customername = document.getElementById("custname").value;
        //var customercity = document.getElementById("custcity").value;
        
        //Create the parameter string
        //var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult1(result);
            
        }
            
        }
        
        //Start AJAX request
        objRequest.open("GET", url, true);
        objRequest.send();
        
        }
        
        function OperationResult1(output)
        
        {
            if (output.DeleteCustomerResult.WasSuccessful == 1)
            {
                document.getElementById("s3result").innerHTML = "Customer was successfully deleted from the customer list.";
            }
            else
            {
                document.getElementById("s3result").innerHTML = "The operation was not successful!" + "<br>" + output.DeleteCustomerResult.Exception;
            }
                
        }

function ChangeShipTo()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
        
        //Collect Customer data from web page
        var orderid = document.getElementById("orderid").value;
        var shipaddress = document.getElementById("shipaddress").value;
        var shipcity = document.getElementById("shipcity").value;
        var shipname = document.getElementById("shipname").value;
        var shippostalcode = document.getElementById("shippostal").value;
        
        //Create the parameter string
        var updatedaddress = '{OrderID:"'+ orderid +'", "ShipName":"'+ shipname +'", "ShipAddress":"' + shipaddress +'", "ShipCity":"' + shipcity +'", "Shippostcode":"'+ shippostalcode +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult2(result);
            
}
            
}
        
        //Start AJAX request
        objRequest.open("POST", url, true);
        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        objRequest.send(updatedaddress);
        
        }
        
        function OperationResult2(output)
        
        {
            if (output == 1)
            {
                document.getElementById("s2result").innerHTML = "Shipping Address was successfully changed.";
            }
            else
            {
                document.getElementById("s2result").innerHTML = "The operation was not successful!" + "<br>" + output;
            }
                
            }  
            
    

   


