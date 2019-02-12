var board = {

	write: function(e) {
		if(!$.trim($("input[name='subject']").val())) {
			alert("제목을 입력해주세요.");
			$("input[name='subject']").focus();
			return;
		}
		if(!$.trim($("input[name='writer']").val())) {
			alert("작성자를 입력해주세요.");
			$("input[name='writer']").focus();
			return;
		}
		if(!$.trim($("textarea[name='content']").val())) {
			alert("내용을 입력해주세요.");
			$("textarea[name='content']").focus();
			return;
		}
		if(!$.trim($("input[name='pw']").val())) {
			alert("비밀번호를 입력해주세요.");
			$("input[name='pw']").focus();
			return;
		}

		$("#notice").submit();
	}
}