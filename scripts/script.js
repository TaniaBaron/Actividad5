function cambio1(params){
    $(this).css('background', 'blue')
    }
    
    function cambio2(params){
        $(this).css('background', 'red')
        }
        
            
    $('.parrafo1').hover(cambio1, cambio2)
    
    
    function cambio3(params){
        $(this).css('background', 'turquoise')
        }
        
        function cambio4(params){
            $(this).css('background', 'yellow')
            }
             $('.parrafo2').hover(cambio3, cambio4)
    
    
         function cambio5(params){
                $(this).css('background', 'orange')
                }
                
                function cambio6(params){
                    $(this).css('background', 'gray')
                    }
                     $('.parrafo3').hover(cambio5, cambio6)
    
                     function cambio7(params){
                        $(this).css('background', 'violet')
                        }
                        
                        function cambio8(params){
                            $(this).css('background', 'skyblue')
                            }
                             $('.parrafo4').hover(cambio7, cambio8)

                             function cambio9(params){
                                $(this).css('background', 'turquoise')
                                }
                                
                                function cambio10(params){
                                    $(this).css('background', 'skyblue')
                                    }
                                     $('.parrafo5').hover(cambio9, cambio10)

                                     function cambio11(params){
                                        $(this).css('background', 'yellow')
                                        }
                                        
                                        function cambio12(params){
                                            $(this).css('background', 'skyblue')
                                            }

                                             $('.parrafo6').hover(cambio11, cambio12)
                                
                                             $('.parrafo13').mouseover(function(){
                                                $(this).addClass('color3')
                                            })
                                            $('.parrafo13').mouseout(function(){
                                                $(this).addClass('color4')
                                            })