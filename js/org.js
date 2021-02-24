$(document).ready(
    function()  {
        console.log("org script works");
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
        var $price = $('.card .card-preis .card-preis-euro');
        var $price1 = [];
        var min = $price[0];
        var max = $price[0];
        var i=0;
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
                if (parseInt(min.innerHTML) < parseInt(obj.innerHTML)) {
                    max = obj;
                }
            }
            return max;
        }
        console.log("maxResult",maxResult($price));
        console.log("minResult",minResult($price));
        //var oldElem = $price[0];
        $price.map((index,elem)=> {
            console.log("elem",elem.innerHTML);
            $price1.push(parseInt(elem.innerHTML));
        })
        console.log("price1",$price1);
        const result = () => {
            for (var obj of $price) {
                for (var obj1 of $price) {
                    if (parseInt(obj.innerHTML) < parseInt(obj1.innerHTML)) {
                        console.log("checking",obj.innerHTML,obj1.innerHTML);
                        //obj.innerHTML=obj1.innerHTML;
                        
                    }
                }
                i++;
                console.log("iteration"+i,$price);
            }  
        }
        console.log("sort",result());
        //$price = $('.card .card-preis .card-preis-euro');
        //console.log("price",$price);
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