$(function(){
	$('.dropdown').hover(function(){
		//添加active class
		var $this = $(this);
		// console.log($this.data('active'));
		var activeClass = $this.data('active') + '-active';
		$this.addClass(activeClass);
	},function(){
		//删除active class
		var $this = $(this);
		var activeClass = $this.data('active') + '-active';
		$this.removeClass(activeClass);		
	});
});