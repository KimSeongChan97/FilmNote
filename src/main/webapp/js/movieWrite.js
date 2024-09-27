// FilmNote/src/main/webapp/js/movieWrite.js

$(function() {
	
	/** adminMenu.jsp backgorund color */
	document.getElementById('movie-write-menu').style.background = '#DEC5D2';

    $('#movie-list-menu').hover(
        function() {
        	// 현재 항목 스타일 변경
            $(this).css('background', '#DEC5D2');

            // movie-write의 배경색을 초기화 
            $('#movie-write-menu').css('background', 'transparent');
        },
        function() {
            // movie-list-menu에서 마우스가 나갈 때 movie-write 배경색 복구
            $('#movie-write-menu').css('background', '#DEC5D2');
            $('#movie-list-menu').css('background', 'transparent');
        }
    );
	
	
	/** 이미지 등록 */
	$('#moviePoster').change(function(){
		readURL(this);
	});
	
	function readURL(input){
	    var reader = new FileReader();
	    reader.onload = function(e){
	        $('#showImg').attr('src',e.target.result);
	    }
	    reader.readAsDataURL(input.files[0]);
	}
	
	
	
	/** 유효성 검사 */
	$('#movieWriteBtn').click(function(event){
		event.preventDefault(); // 폼 제출 방지
		
		let movieCode = $('#movieCode').val().trim();
		let movieTitle = $('#movieTitle').val().trim();
		let movieDirector = $('#movieDirector').val().trim();
		let movieGenre = $('#movieGenre').val().trim();
		let movieReleaseDate = $('#movieReleaseDateDiv').val().trim();
		let movieRating = $('#movieRating').val().trim();
		let movieScore = $('#movieScore').val().trim();
		let movieSynopsis = $('#movieSynopsis').val().trim();
		let moviePoster = $('#moviePoster').val().trim();
		// let moviePoster = $('#showImg').attr('src');
		
		
		// 오류 메시지 초기화 및 숨김
		$('.validationDiv').hide();
		
		
		// 영화 코드 입력 검사
		if ( movieCode === ''){
		    $('#movieCodeDiv').html('영화 코드를 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 제목 입력 검사
		if ( movieTitle === ''){
		    $('#movieTitleDiv').html('영화 제목을 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 감독 입력 검사
		if ( movieDirector === ''){
		    $('#movieDirectorDiv').html('영화 감독을 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 장르 입력 검사
		if ( movieGenre === ''){
		    $('#movieGenreDiv').html('영화 장르를 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 개봉일 입력 검사
		if ( movieReleaseDate === ''){
		    $('#movieReleaseDateDiv').html('영화 개봉일을 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 관람가 입력 검사
		if ( movieRating === ''){
		    $('#movieRatingDiv').html('영화 관람가를 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 평점 입력 검사
		if ( movieScore === ''){
		    $('#movieScoreDiv').html('영화 평점을 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 줄거리 입력 검사
		if ( movieSynopsis === ''){
		    $('#movieSynopsisDiv').html('영화 줄거리를 입력하세요').show();
		    isValid = false;
		}
		
		// 영화 포스터 입력 검사
		if ( moviePoster === ''){
		    $('#moviePosterDiv').html('영화 포스터를 등록하세요').show();
		    isValid = false;
		}
		
	});
	
	// 입력 내용 초기화
	$('#resetBtn').click(function(){
	    $('.validationDiv').hide();
		
		// <form> input 초기화
	    $('form[name="movie-write-form"]')[0].reset();
		
		// <form> 이미지 초기화
		$('#showImg').attr('src', '');
	});	
	
	// 입력 필드에 포커스가 갈 때 오류 메시지 숨기기
	$('#movieCode').focus(function(){
			$('#movieCodeDiv').hide();
	});	
	$('#movieTitle').focus(function(){
			$('#movieTitleDiv').hide();
	});	
	$('#movieDirector').focus(function(){
			$('#movieDirectorDiv').hide();
	});	
	$('#movieGenre').focus(function(){
			$('#movieGenreDiv').hide();
	});	
	$('#movieReleaseDate').focus(function(){
			$('#movieReleaseDateDiv').hide();
	});	
	$('#movieRating').focus(function(){
			$('#movieRatingDiv').hide();
	});	
	$('#movieScore').focus(function(){
			$('#movieScoreDiv').hide();
	});	
	$('#movieSynopsis').focus(function(){
			$('#movieSynopsisDiv').hide();
	});	
	
	$('#showImg').click(function(){
			$('#moviePosterDiv').hide();
	});	
	
	
});