# PHP use variable from outer scope

	$msg = "hi";

	function sendmsg() {
		global $msg;
		echo $msg;
	}
