$(document).ready(function(){
	/**
	 * 点击按钮就提交
	 */
	$("button").click(function(){
		var res = query();
		console.log(res);
	})
	/**
	 * 整个执行过程
	 * @return {[res]} 执行结果
	 */
	function query () {
		var info = $(".input").val();
		var res = mackSentence(info);
		return res;
	}
	function makeSentence (info) {

	}
});