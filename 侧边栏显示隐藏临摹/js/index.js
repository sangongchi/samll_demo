$(function () {
    $(`.container .content .menu_tab .tab`).removeClass('active');
    $('.container .content .menu1 .tab').eq(0).addClass('active')
    // $(function(){
    //     $('.menu > ul > li > a').click(function(){
    //         var index=$('.menu > ul > li > a').index(this)%6;
    //         console.log(index)
    //         $(this).addClass('selected').parent().siblings().find('a').removeClass('selected')
    //         var value = $(this).parents("ul").attr('class')
    //         var tab_value=$(this).parents("ul").attr('class').substring(value.length-1)
    //         $(`.container .content .menu_tab .tab`).removeClass('active');
    //         $(`.container .content .menu${tab_value} .tab`).eq(index-1).addClass('active')

    //     })
    // })
        function myfunction(li,li_a,menu_tab){
            li.click(function(){
                var index =$(this).index()
                menu_tab.removeClass('active')
                menu_tab.eq(index).addClass('active')
                li_a.removeClass('selected')
                li_a.eq(index).addClass('selected').siblings().removeClass('selected')
            })
        }
        $li1=$(`.container .menu .ulmenu1 li`)
        $li_a1=$(`.container .ulmenu1 li a`)
        $menu_tab1=$(`.container .content .menu1 .tab`)
        $li2=$(`.container .menu .ulmenu2 li`)
        $li_a2=$(`.container .ulmenu2 li a`)
        $menu_tab2=$(`.container .content .menu2 .tab`)
        $li3=$(`.container .menu .ulmenu3 li`)
        $li_a3=$(`.container .ulmenu3 li a`)
        $menu_tab3=$(`.container .content .menu3 .tab`)
        myfunction($li1,$li_a1,$menu_tab1)
        myfunction($li2,$li_a2,$menu_tab2)
        myfunction($li3,$li_a3,$menu_tab3)


    //tab栏的收缩隐藏
    $(function () {
        $('.menu > ul').eq(0).show().siblings('ul').hide()
        // console.log($('.menu > ul').eq(0).siblings('ul'))
        $('.menu h3').click(function () {
            $('.menu_tab > div').removeClass("active")
            var val = ($(this).next().attr("class"))
            var menu_value = (val.substring(val.length - 1))

            $(`.container .content .menu${menu_value} .tab:first-child`).addClass("active")
            $(`.container .menu .ulmenu${menu_value} li > a`).removeClass('selected')
            $(`.container .menu .ulmenu${menu_value} li a`).eq(0).addClass("selected")

            $(this).next().stop().slideToggle()
            $(this).siblings().next('ul').stop().slideUp()
        })
    })

    //通过jquery中的文本操作 方法 动态更换 标题文字
    $(function(){
        $('.container .menu > h3').click(function(){
            $('.container .content .A1').empty().text($(this).text())
        })
    })
})