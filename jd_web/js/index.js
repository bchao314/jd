/**
 * Created by zc on 2016/8/23.
 */
$(function () {
    /*topbanner close*/
    (function () {
        $(".close-banner").click(function () {
            $(".topbanner").fadeOut(500)
        })
    })();

    /*nav-top*/
    (function () {

        $(".shortcut").find(".fore").mouseenter(function () {
            $(this).addClass("hover").siblings().removeClass("hover")
            var key = $(this).index()
            //console.log(key)
            $(".fore-hover").eq(key).addClass("hover").siblings().removeClass("hover")
        });

        $(".shortcut").find(".fore").mouseleave(function () {
            $(this).removeClass("hover")
        })


    })();


    /*nav二级菜单*/
    (function () {
        $(".dd-inner").children(".item").hover(function () {
            $(this).addClass("current").siblings(".item").removeClass("current");
            var index = $(this).index();
            $(".dorpdown-layer").children(".item-sub").hide();
            $(".dorpdown-layer").children(".item-sub").eq(index).show();

        })
        $(".dd-inner").hover(function () {
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $('.item').removeClass("current");
        })
        $("#index_menus_sub").children(".item-sub").hover(function () {
            var index = $(this).index();
            $(".dd-inner").children(".item").eq(index).addClass("current");
            $("#index_menus_sub").show();
        }, function () {
            $("#index_menus_sub").hide();
            $(".dd-inner").children(".item").removeClass("current");
        })

    })();

    /*遍历服务图标*/
    var $service_i = $("#service").find("i");
    $($service_i).each(function (i, ele) {
        $(ele).css("backgroundPosition", 'right ' + (-i * 25) + 'px');

    });

    /*slider-banner*/
    (function () {
        var timer = null;
        /*动态创建小按钮*/
        var $sliderBoxLis = $("#slider-box").children();
        var $circleBox = $("#circle-box");

        $sliderBoxLis.each(function (i) {
            $("#circle-box").append("<li>" + (i + 1) + "</li>");
        });
        $("#circle-box li:first").addClass("current");

        /*小按钮事件*/
        var flag = true;
        var key = 0;
        $circleBox.children().mouseenter(function () {
            if (flag) {
                flag = false;
                $(this).addClass("current").siblings().removeClass("current");
                $sliderBoxLis.eq($(this).index()).stop().animate({"zIndex": "1", "opacity": "1"}, 300)
                    .siblings().stop().animate({"zIndex": "0", "opacity": "0"}, 300);
                key = $(this).index();
                setInterval(function () {
                    flag = true;
                }, 500);
            }
        });
        /*右边按钮事件*/
        $("#slider").mouseover(function () {
            $(".arrow").css("display", "block");
            clearInterval(timer);
        }).mouseleave(function () {
            $(".arrow").css("display", "none");
            timer = setInterval(autoplay, 3000);
        });

        $(".arrow-r").click(function () {
            key++;
            if (key >= 6) {
                key = 0;
            }
            $sliderBoxLis.eq(key).stop().animate({"zIndex": "1", "opacity": "1"}, 300)
                .siblings().stop().animate({"zIndex": "0", "opacity": "0"}, 300);

            $circleBox.children().eq(key).addClass("current").siblings().removeClass("current")
        });
        /*左边按钮*/
        $(".arrow-l").click(function () {
            key--;
            if (key < 0) {
                key = 5;
            }
            $sliderBoxLis.eq(key).stop().animate({"zIndex": "1", "opacity": "1"}, 300)
                .siblings().stop().animate({"zIndex": "0", "opacity": "0"}, 300);

            $circleBox.children().eq(key).addClass("current").siblings().removeClass("current");
        });
        /*定时器*/
        timer = setInterval(autoplay, 3000);
        function autoplay() {
            key++;
            if (key >= 6) {
                key = 0;
            }
            $sliderBoxLis.eq(key).stop().animate({"zIndex": "1", "opacity": "1"}, 300)
                .siblings().stop().animate({"zIndex": "0", "opacity": "0"}, 300);

            $circleBox.children().eq(key).addClass("current").siblings().removeClass("current");
        }


        //css({"zIndex":"1","opacity":"1"})
        //.css({"zIndex":"0","opacity":"0"})

    })();

    /*hotmale轮播图*/
    (function () {
        var $hotmale_rUl = $("#hotmale-r").children("ul");
        $hotmale_rUl.find(".fore1").clone(true, true).appendTo($hotmale_rUl);
        $hotmale_rUl.find(".fore4").clone(true, true).prependTo($hotmale_rUl);
        $("#hotmale-r").mouseover(function () {
            $("#hotmale-arrow").show()
        }).mouseleave(function () {
            $("#hotmale-arrow").hide()
        });
        var key = 1;
        $("#hotmale-next").click(function () {
            key++;
            if (key >= 5) {
                $($hotmale_rUl).css("left", 0);
                key = 1;
            }
            $($hotmale_rUl).stop().animate({left: -key * 1000}, 500);
        });


        $("#hotmale-prev").click(function () {
            key--;
            if (key <= 0) {
                $($hotmale_rUl).css("left", -5000);
                key = 4;
            }
            $($hotmale_rUl).stop().animate({left: -key * 1000}, 500);
        });

    })();


    /*1f轮播图*/
    (function () {
        var timer = null;
        /*创造小按钮*/
        var $clothesSliderBox = $("#clothes-slider-box");
        var $clothesSliderLis = $clothesSliderBox.children();
        var $clothesCircleBox = $("#clothes-circle-box");
        $($clothesSliderLis).each(function () {
            $($clothesCircleBox).append("<li></li>");
        });
        $("#clothes-circle-box li:first").addClass("current");

        /*克隆添加对象*/
        $clothesSliderBox.children(".fore1").clone(true, true).appendTo($("#clothes-slider-box"));
        $clothesSliderBox.children(".fore4").clone(true, true).prependTo($("#clothes-slider-box"));

        $("#clothes-main-slider").mouseover(function () {
            $("#clothes-arrow").css("display", "block");
            clearInterval(timer);
        }).mouseleave(function () {
            $("#clothes-arrow").css("display", "none");
            timer = setInterval(clothesAutoPlay, 3000)
        });

        var key = 1
        /*小按钮事件*/
        var flag = true;


        $($clothesCircleBox).children("li").mouseenter(function () {
            if (flag) {
                flag = false;
                $(this).addClass("current").siblings().removeClass("current");
                key = $(this).index();
                $($clothesSliderBox).stop().animate({left: -(key + 1) * 440}, 500);
                key = $(this).index();
                setInterval(function () {
                    flag = true;
                }, 500);
            }
            ;
        });


        /*右边按钮*/
        $("#clothes-arrow-r").click(function () {
            key++;
            if (key >= 5) {
                $($clothesSliderBox).css("left", 0);
                key = 1;
            }
            $($clothesSliderBox).stop().animate({left: -key * 440}, 500);
            $("#clothes-circle li").eq(key - 1).addClass("current").siblings().removeClass("current")

        });


        /*左边按钮*/
        $("#clothes-arrow-l").click(function () {
            key--;
            if (key <= 0) {
                $("#clothes-slider-box").css("left", -2200);
                key = 4;
            }
            $("#clothes-slider-box").stop().animate({left: -key * 440}, 500);
            $("#clothes-circle li").eq(key - 1).addClass("current").siblings().removeClass("current")
        });


        /*定时器*/
        timer = setInterval(clothesAutoPlay, 3000);
        function clothesAutoPlay() {
            key++;
            if (key >= 5) {
                $("#clothes-slider-box").css("left", 0);
                key = 1;
            }
            $("#clothes-slider-box").stop().animate({left: -key * 440}, 500);

            $("#clothes-circle li").eq(key - 1).addClass("current").siblings().removeClass("current");
        }


    })();
    /*1f tab栏*/

    /*2f轮播图*/
    (function () {
        var timer = null;
        /*创造小按钮*/
        $("#cosmetics-slider-box li").each(function () {
            $("#cosmetics-circle-box").append("<li></li>");
        });
        $("#cosmetics-circle-box li:first").addClass("current");

        /*克隆添加对象*/
        $("#cosmetics-slider-box .fore1").clone(true, true).appendTo($("#cosmetics-slider-box"));
        $("#cosmetics-slider-box .fore4").clone(true, true).prependTo($("#cosmetics-slider-box"));

        $("#cosmetics-main-slider").mouseover(function () {
            $("#cosmetics-arrow").css("display", "block");
            clearInterval(timer);
        }).mouseleave(function () {
            $("#cosmetics-arrow").css("display", "none");
            timer = setInterval(clothesAutoPlay, 3000)
        });

        var key = 1
        /*小按钮事件*/
        var flag = true;
        $("#cosmetics-circle-box li").mouseenter(function () {
            if (flag) {
                flag = false;
                $(this).addClass("current").siblings().removeClass("current");
                key = $(this).index();
                $("#cosmetics-slider-box").stop().animate({left: -(key + 1) * 340}, 500);
                key = $(this).index();
                setInterval(function () {
                    flag = true;
                }, 500);
            }
            ;
        });


        /*右边按钮*/
        $("#cosmetics-arrow-r").click(function () {
            key++;
            if (key >= 5) {
                $("#cosmetics-slider-box").css("left", 0);
                key = 1;
            }
            $("#cosmetics-slider-box").stop().animate({left: -key * 340}, 500);
            $("#cosmetics-circle li").eq(key - 1).addClass("current").siblings().removeClass("current");

        });


        /*左边按钮*/
        $("#cosmetics-arrow-l").click(function () {
            key--;
            if (key <= 0) {
                $("#cosmetics-slider-box").css("left", -1700);
                key = 4;
            }
            $("#cosmetics-slider-box").stop().animate({left: -key * 340}, 500);
            $("#cosmetics-circle li").eq(key - 1).addClass("current").siblings().removeClass("current")
        });


        /*定时器*/
        timer = setInterval(clothesAutoPlay, 3000);
        function clothesAutoPlay() {
            key++;
            if (key >= 5) {
                $("#cosmetics-slider-box").css("left", 0);
                key = 1;
            }
            $("#cosmetics-slider-box").stop().animate({left: -key * 340}, 500);
            $("#cosmetics-circle li").eq(key - 1).addClass("current").siblings().removeClass("current");
        }


    })();

    /*3楼轮播图*/
    (function () {
        var timer = null;
        /*创造小按钮*/
        var $telMainSlider = $("#tel-main-slider");
        var $telSliderBox = $("#tel-slider-box");
        var $teCircle = $("#tel-circle");
        var $telCircleBox = $teCircle.children("#tel-circle-box");
        var $telArrow = $("#tel-arrow");

        $telSliderBox.children("li").each(function () {
            $telCircleBox.append("<li></li>");
        });

        $telCircleBox.children("li").eq(0).addClass("current");

        /*克隆添加对象*/
        $telSliderBox.children(".fore1").clone(true, true).appendTo($telSliderBox);
        $telSliderBox.children(".fore4").clone(true, true).prependTo($telSliderBox);

        $telMainSlider.mouseover(function () {
            $telArrow.css("display", "block");
            clearInterval(timer);
        }).mouseleave(function () {
            $telArrow.css("display", "none");
            timer = setInterval(autoPlay, 3000)
        });

        var key = 1;
        /*小按钮事件*/
        var flag = true;
        $telCircleBox.children("li").mouseenter(function () {
            if (flag) {
                flag = false;
                $(this).addClass("current").siblings().removeClass("current");
                key = $(this).index();
                $telSliderBox.stop().animate({left: -(key + 1) * 440}, 500);
                key = $(this).index();
                setInterval(function () {
                    flag = true;
                }, 500);
            }
        });


        /*右边按钮*/
        $telArrow.children("#tel-arrow-r").click(function () {
            key++;
            if (key >= 5) {
                $telSliderBox.css("left", 0);
                key = 1;
            }
            $telSliderBox.stop().animate({left: -key * 440}, 500);
            $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current");

        });


        /*左边按钮*/
        $telArrow.children("#tel-arrow-l").click(function () {
            key--;
            if (key <= 0) {
                $telSliderBox.css("left", -2200);
                key = 4;
            }
            $telSliderBox.stop().animate({left: -key * 440}, 500);
            $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current")
        });


        /*定时器*/
        timer = setInterval(autoPlay, 3000);
        function autoPlay() {
            key++;
            if (key >= 5) {
                $telSliderBox.css("left", 0);
                key = 1;
            }
            $telSliderBox.stop().animate({left: -key * 440}, 500);
            $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current");
        }


    })();

    /*4f轮播图*/
    (function () {
        function slider($telMainSlider, $telSliderBox, $telCircleBox, $telArrow) {
            /*创造小按钮*/
            var timer = null;
            var $teCircle = $telCircleBox.parent()
            $telSliderBox.children("li").each(function () {
                $telCircleBox.append("<li></li>");
            });

            $telCircleBox.children("li").eq(0).addClass("current");

            /*克隆添加对象*/
            $telSliderBox.children(".fore1").clone(true, true).appendTo($telSliderBox);
            $telSliderBox.children(".fore4").clone(true, true).prependTo($telSliderBox);

            $telMainSlider.mouseover(function () {
                $telArrow.css("display", "block");
                clearInterval(timer);
            }).mouseleave(function () {
                $telArrow.css("display", "none");
                timer = setInterval(autoPlay, 3000)
            });

            var key = 1;
            /*小按钮事件*/
            var flag = true;
            $telCircleBox.children("li").mouseenter(function () {
                if (flag) {
                    flag = false;
                    $(this).addClass("current").siblings().removeClass("current");
                    key = $(this).index();
                    $telSliderBox.stop().animate({left: -(key + 1) * 440}, 500);
                    key = $(this).index();
                    setInterval(function () {
                        flag = true;
                    }, 500);
                }
            });


            /*右边按钮*/
            $telArrow.children("#tel-arrow-r").click(function () {
                key++;
                if (key >= 5) {
                    $telSliderBox.css("left", 0);
                    key = 1;
                }
                $telSliderBox.stop().animate({left: -key * 440}, 500);
                $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current");

            });


            /*左边按钮*/
            $telArrow.children("#tel-arrow-l").click(function () {
                key--;
                if (key <= 0) {
                    $telSliderBox.css("left", -2200);
                    key = 4;
                }
                $telSliderBox.stop().animate({left: -key * 440}, 500);
                $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current")
            });


            /*定时器*/
            timer = setInterval(autoPlay, 3000);
            function autoPlay() {
                key++;
                if (key >= 5) {
                    $telSliderBox.css("left", 0);
                    key = 1;
                }
                $telSliderBox.stop().animate({left: -key * 440}, 500);
                $teCircle.find("li").eq(key - 1).addClass("current").siblings().removeClass("current");
            }


        }

        var $electricalMainSlider = $("#electrical-main-slider");
        var $electricalSliderBox = $("#electrical-slider-box");
        var $electricalCircleBox = $("#electrical-circle-box");
        var $electricalArrow = $("#electrical-arrow")
        slider($electricalMainSlider, $electricalSliderBox, $electricalCircleBox, $electricalArrow)

    })();
    /*5f轮播图*/
    (function () {

        /*创造小按钮*/
        $("#digital-slider-box li").each(function () {
            $("#digital-circle-box").append("<li></li>");
        });
        $("#digital-circle-box li:first").addClass("current");

        /*克隆添加对象*/
        $("#digital-slider-box .fore1").clone(true, true).appendTo($("#digital-slider-box"));
        $("#digital-slider-box .fore4").clone(true, true).prependTo($("#digital-slider-box"));

        $("#digital-main-slider").mouseover(function () {
            $("#digital-arrow").css("display", "block");
            clearInterval(timer);
        }).mouseleave(function () {
            $("#digital-arrow").css("display", "none");
            timer = setInterval(autoPlay, 3000)
        });

        var key = 1
        /*小按钮事件*/
        var flag = true;
        $("#digital-circle-box li").mouseenter(function () {
            if (flag) {
                flag = false;
                $(this).addClass("current").siblings().removeClass("current");
                key = $(this).index();
                $("#digital-box").stop().animate({left: -(key + 1) * 440}, 500);
                key = $(this).index();
                setInterval(function () {
                    flag = true;
                }, 500);
            }
            ;
        });


        /*右边按钮*/
        $("#digital-arrow-r").click(function () {
            key++;
            if (key >= 5) {
                $("#digital-slider-box").css("left", 0);
                key = 1;
            }
            $("#digital-slider-box").stop().animate({left: -key * 440}, 500);
            $("#digital-circle li").eq(key - 1).addClass("current").siblings().removeClass("current");

        });


        /*左边按钮*/
        $("#digital-arrow-l").click(function () {
            key--;
            if (key <= 0) {
                $("#digital-slider-box").css("left", -2200);
                key = 4;
            }
            $("#digital-slider-box").stop().animate({left: -key * 440}, 500);
            $("#digital-circle li").eq(key - 1).addClass("current").siblings().removeClass("current")
        });


        /*定时器*/
        timer = setInterval(autoPlay, 3000);
        function autoPlay() {
            key++;
            if (key >= 5) {
                $("#digital-slider-box").css("left", 0);
                key = 1;
            }
            $("#digital-slider-box").stop().animate({left: -key * 440}, 500);
            $("#digital-circle li").eq(key - 1).addClass("current").siblings().removeClass("current");
        }


    })();


    /*tab栏*/

    (function () {
        $(".tab li").mouseenter(function () {
            $(this).addClass("tab-active").siblings().removeClass("tab-active")
            $(".clothes .mc").children(".main-body").eq($(this).index()).addClass("current").siblings().removeClass("current")
        })
    })();


    /*电梯*/
    (function () {
        var TOP = 0;
        var $elevatorBox = $(".elevator-box")
        var $elevatorLi = $elevatorBox.children("li")
        $(window).scroll(function () {
            TOP = $(document).scrollTop();
            if (TOP >= $(".digital").offset().top - 300) {
                $(".digital.floor").addClass("floor-current").siblings().removeClass("floor-current")
                $elevatorLi.eq(4).addClass("current").siblings().removeClass("current")
            } else if (TOP >= $(".electrical").offset().top - 300) {
                $(".electrical.floor").addClass("floor-current").siblings().removeClass("floor-current")
                $elevatorLi.eq(3).addClass("current").siblings().removeClass("current")
            } else if (TOP >= $(".jd-produts .tel").offset().top - 300) {
                $(".tel.floor").addClass("floor-current").siblings().removeClass("floor-current")
                $elevatorLi.eq(2).addClass("current").siblings().removeClass("current")
            } else if (TOP >= $(".cosmetics").offset().top - 300) {
                $(".cosmetics.floor").addClass("floor-current").siblings().removeClass("floor-current")
                $elevatorLi.eq(1).addClass("current").siblings().removeClass("current")
            } else if (TOP >= $(".clothes").offset().top - 300) {
                $(".clothes.floor").addClass("floor-current").siblings().removeClass("floor-current")
                $elevatorLi.eq(0).addClass("current").siblings().removeClass("current")
            } else if (TOP > 600) {
                $(".elevator").fadeIn();
            } else {
                $(".elevator").fadeOut();
            }
        })

        $elevatorLi.click(function () {
            $("html,body").stop().animate({
                "scrollTop": $(".floor").eq($(this).index()).offset().top
            },500)
        })
        $(".back").click(function () {
            $("html,body").animate({"scrollTop": 0}, 500)
        })
        $elevatorLi.mouseenter(function () {
            $(this).addClass("currentBtn").siblings().removeClass("currentBtn")
        })
        $elevatorLi.mouseleave(function () {
            $elevatorLi.removeClass("currentBtn")
        })


    })();


});