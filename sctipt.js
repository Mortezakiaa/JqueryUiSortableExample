if(localStorage.getItem('Position')){
  let array = JSON.parse(localStorage.getItem("Position"))
  
  $.each(array , (i,item)=>{
      let Containers = $(`#${item.ContainerId}`)
      let Child = item.Childs
     
      //if(Child == undefined){
      //    Containers.append('')
      //}
      //for(let i=0 ; i < Containers.length ;  i++){
      //    Containers.append($(`#${Child}`)[i])
      //}
      //$.each(Child , (i , item)=>{
      //    Containers.append($(`#${item}`)[i])
      //})
  })
}

$('.Box').sortable({
  receive:function(ev,ui){
      if($('#Box1').children().length > 2){
          ui.sender.sortable('cancel')
      }
  },
  update: function (event, ui) {
      let Arr =[]
      $('.Box').each(function(evt,item){
          let Obj = {}
          let Container = $(item).attr('id')
          Obj.ContainerId = Container
          let Childs = []
          $(item).children().each(function(e,i){
              let BoxesID = $(i).attr('id')
              Childs.push(BoxesID)
              Obj.Childs = Childs
          })
          Arr.push(Obj)
      })

      localStorage.setItem('Position' , JSON.stringify(Arr))
  },
  connectWith:'.Box',
  handle: '.DragIcon',
  placeholder:'placeholder',
  start: function(event, ui) {
      ui.placeholder.html(ui.item.html());
  } , 
  
})
$(".Dashboard").disableSelection();