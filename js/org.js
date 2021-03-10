$(document).ready(
    function()  {
        //console.log("org script works");
        var $group = $('.category .groups input');
        var $discount = $('input#discount:checked');
        //CHECKBOX GROUPS
        $group.click(function() {
            if (!$(this).prop("checked")) {
                if ($(this).attr('id') == "new") {
                    $(this).parents().find(".new").hide("slow");
                }
                if ($(this).attr('id') == "discount") {
                    $(this).parents().find(".goods-discount").hide("slow");
                }  
            }
            else {
                if ($(this).attr('id') == "new") {
                    $(this).parents().find(".new").show();
                }
                if ($(this).attr('id') == "discount") {
                    $(this).parents().find(".goods-discount").show();
                }  
            }
        })
        //SORT PRICE
        var $priceInput = $('.category-price input');
        var $price = $('.new .card-preis-euro');
        var $priceDiscount = $('.goods-discount .card-preis-euro');
        var $price1=[];
        var $price2=[];
        var $priceNew = [];
        var min = $price[0];
        var max = $price[0];
        function recursion($price) {
            i=0;
            if (parseInt(min.innerHTML) >= parseInt($price[i].innerHTML)) {  
                min = $price[i];
            }
            i++;
            return recursion($price.splice(i));
        }
        var minResult = ($price) => {
            for ( var obj of $price) {
                if (parseInt(min.innerHTML) > parseInt(obj.innerHTML)) {
                    min = obj;
                }
            }
            return min;
        }
        var maxResult = ($price) => {
            for ( var obj of $price) {
                if (parseInt(max.innerHTML) < parseInt(obj.innerHTML)) {
                    max = obj;
                }
            }
            return max;
        }
        var matchItemNew = () => {
            for (let i=0;i<$itemPreisNew.length;i++) {
                for (let j=0;j<resultSortNew.length;j++) {
                   //console.log($itemPreisNew[j].innerHTML,resultSortNew[i]);
                    if ($itemPreisNew[j].innerHTML == resultSortNew[i]) {
                        $itemNew.push($item[j]);
                    }                 
                }            
            }
            return $itemNew;
        }
        var matchItemDiscount = flag => {
            $itemDiscount = [];
            if (flag == 0) {
                resultSortDiscount=sortDiscount($price2);
                $itemPreisDiscount = $('.goods-discount  .card-preis-euro');
                console.log("matchItemDiscount",flag,resultSortDiscount,$itemPreisDiscount);
                for (let i=0;i<$itemPreisDiscount.length;i++) {
                    for (let j=0;j<resultSortDiscount.length;j++) {
                        //console.log("comapre"+i+j,$itemPreisDiscount[j].innerHTML,resultSortDiscount[i]);
                        if ($itemPreisDiscount[j].innerHTML == resultSortDiscount[i]) {  
                            
                            $itemDiscount.push($('.goods-discount .item')[j]);
                        }                 
                    }            
                }
                return $itemDiscount;
            }
            else if (flag == 1) {
                $itemDiscount = [];
                resultSortDiscount=sortDiscountMax($price2);
                $itemPreisDiscount = $('.goods-discount  .card-preis-euro');
                console.log("matchItemDiscount checking",flag,resultSortDiscount,$itemPreisDiscount);
                for (let i=0;i<$itemPreisDiscount.length;i++) {
                    for (let j=0;j<resultSortDiscount.length;j++) {
                        console.log("comapre",i,j,$itemPreisDiscount[j].innerHTML,resultSortDiscount[i]);
                        if ($itemPreisDiscount[j].innerHTML == resultSortDiscount[i]) {  
                            $itemDiscount.push($('.goods-discount .item')[j]);
                            console.log("pushed",$('.goods-discount .item')[1]);
                        }                 
                    }            
                }
                return $itemDiscount;
            }
        }
        console.log("result matchItemDiscount",$itemDiscount);
        var sort = ($price) => {
            var oldPrice = $price[0];
            for (var i=0;i<$price.length;i++) {
                for (var j=0;j<$price.length;j++) {
                    if ($price[i] < $price[j]) {
                        oldPrice = $price[i];
                        $price[i] = $price[j];
                        $price[j] = oldPrice;
                    }
                }
            }     
            return $price;
        }
        var sortMax = ($price) => {
            var oldPrice = $price[0];
            for (var i=0;i<$price.length;i++) {
                for (var j=0;j<$price.length;j++) {
                    if ($price[i] > $price[j]) {
                        oldPrice = $price[i];
                        $price[i] = $price[j];
                        $price[j] = oldPrice;
                    }
                }
            }
            return $price;
        }
        
        var sortDiscount = ($price) => {
            var oldPrice=$priceDiscount[0];
            for (var i=0;i<$price.length;i++) {
                for (var j=0;j<$price.length;j++) {
                    if ($price[i] < $price[j]) {
                        oldPrice = $price[i];
                        $price[i] = $price[j];
                        $price[j] = oldPrice;
                    }
                }
            }
            return $price;
        }
        var sortDiscountMax = ($price) => {
            var oldPrice=$priceDiscount[0];
            for (var i=0;i<$price.length;i++) {
                for (var j=0;j<$price.length;j++) {
                    if ($price[i] > $price[j]) {
                        oldPrice = $price[i];
                        $price[i] = $price[j];
                        $price[j] = oldPrice;
                    }
                }
            }
            return $price;
        }
        $price.map((index,elem)=> {           
            $price1.push(parseInt(elem.innerHTML));
        })  
        $priceDiscount.map((index,elem)=>{
            $price2.push(parseInt(elem.innerHTML));
        })
        //console.log("sortMax",sortMax($price1));
        console.log("sortDiscount",sortDiscountMax($price2));
        var resultSortNew = [];
        resultSortNew=sort($price1);       
        resultSortDiscount=sortDiscount($price2);        
        //console.log("result function sort",resultSortNew,resultSortDiscount); 
        //APPENDING
        var $item = $('.item');
        var $itemDiscount = $('.goods-discount .item');
        var $itemsNew = $("#new-items");
        var $itemPreisNew = $('.new .card-preis-euro');
        var $itemPreisDiscount = $('.goods-discount .card-preis-euro');
        var $itemNew = [];
        var $itemDiscount = [];
        var flag = 0;
        console.log("last",$itemDiscount);
        $("#new-items").append(matchItemNew());
        $("#discount-items").append(matchItemDiscount(flag));
        $priceInput.click(function() {             
            if ($(this).prop('id') == "high") {     
                flag=1;  
                $("#low").prop("checked",false);
                resultSortNew=sortMax($price1);
                matchItemNew(resultSortNew);
                matchItemDiscount(flag);
                $("#new-items").append($itemNew);
                $("#discount-items").append($itemDiscount);
            }               
            else if ($(this).prop('id') == "low") {
                flag=0;
                resultSortNew=sort($price1);   
                matchItemNew(resultSortNew); 
                matchItemDiscount(flag);
                $("#high").prop("checked",false);
                $("#new-items").append($itemNew);
                $("#discount-items").append($itemDiscount);
            }
        })
        //console.log("itemPreisNew",$itemPreisNew,resultSortDiscount);
        
        
        /*$priceInput.click(function() {
            console.log("price is clicked");
            if (!$(this).prop("checked")) {
                if ($(this).attr('id') == "new") {
                    console.log("entered_new");
                    $(this).parents().find(".new").hide("slow");
                }
                if ($(this).attr('id') == "discount") {
                   console.log("entered_discount")
                    $(this).parents().find(".goods-discount").hide("slow");
                }  
            }
            else {
                if ($(this).attr('id') == "new") {
                    console.log("entered_new");
                    $(this).parents().find(".new").show();
                }
                if ($(this).attr('id') == "discount") {
                   console.log("entered_discount")
                    $(this).parents().find(".goods-discount").show();
                }  
            }
        })*/
    }
)