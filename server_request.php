<?php
	$offset = htmlspecialchars($_GET["offset"]);
	$url = 'http://test.localfeedbackloop.com/api?apiKey=61067f81f8cf7e4a1f673cd230216112&noOfReviews=6&internal=1&yelp=1&google=1';
	$url .= '&offset=' . $offset .'&threshold=1';
	$response = file_get_contents($url);

	$pos = strpos($response, 'errorMessage');
	if($pos !== false) {
		$response = '{}';
	}

	echo $response;
?>