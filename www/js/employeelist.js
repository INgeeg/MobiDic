var db;
var dbCreated = false;
var ind = "";
var v = "";

var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar: false, hScroll: false });

document.addEventListener("deviceready", onDeviceReady, false);

$('#searchindex').keyup(function () {
    ind = $(this).val();
    db.transaction(getIndexes, transaction_error);
});
$('.bt').click(function () {
    var t = $('#searchindex').val() + $(this).val();
    $('#searchindex').val(t);
    $('#searchindex').focus();
});


function onDeviceReady() {
    db = window.openDatabase("EmployeeDirectoryDB", "1.0", "PhoneGap Demo", 200000);
    if (dbCreated)
    	db.transaction(getIndexes, transaction_error);
    else
    	db.transaction(populateDB, transaction_error, populateDB_success);
}

function transaction_error(tx, error) {
	$('#busy').hide();
    alert("Database Error: " + error);
}

function populateDB_success() {
	dbCreated = true;
    db.transaction(getIndexes, transaction_error);
}

function getIndexes(tx) {

	var sql = "select e.id, e.Word, e.Definition " +
				"from words e " +
				"where e.Word LIKE '%" + ind + "%' order by e.Word LIMIT 64 ";
	tx.executeSql(sql, [], getIndexes_success);
}

function getDefinition(tx) {
    var sql = "select e.Definition " +
				"from words e " +
				"where e.id = " + v;
    tx.executeSql(sql, [], getDefinitions_success);
}

function getIndexes_success(tx, results) {
	$('#busy').hide();
 


	var len = results.rows.length;
	var s = "";
	for (var i = 0; i < len; i++) {
	    var word = results.rows.item(i);
	    s += '<li><a id="' + word.id + '" class="click-word">' + word.Word + '</a></li>';
	}
	$('#employeeList').html(s);

	$('.click-word').click(function () {
	    v = $(this).attr('id');
	    db.transaction(getDefinition, transaction_error);
	});

	setTimeout(function(){
		scroll.refresh();
	},100);
}

function getDefinitions_success(tx, results) {
    $('#busy').hide();
    var word = results.rows.item(0);
    
    $('#definitionList').html('<li>' + word.Definition + '</li>');
}

function populateDB(tx) {
	$('#busy').show();


	tx.executeSql('DROP TABLE IF EXISTS words');
	var sql =
		"CREATE TABLE IF NOT EXISTS words ( " +
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"Word VARCHAR(50), " +
		"[Definition] VARCHAR(512))";
	tx.executeSql(sql);
  
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('††∫†º','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('cat','asdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('dog','asdsadssa')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bird','asdasdsad')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('bear','Wasdasdasells')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('kaka','wererwerwer')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('makaa','werwerwfds')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('saka','sdfsdgre')");
	tx.executeSql("INSERT INTO words (Word,[Definition]) VALUES ('slon','werwrwegdfg')");
}
