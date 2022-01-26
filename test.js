import {useEffect} from 'react';

var stringName = 'hello world';

var testname = 'stringName';

eval('console.log(' + testname + ')'); //console.log(stringName)

const extractedDataFromDatabase = {
	// Messages' Schema
	_id: 1,
	text: 'message',
	createdAt: new Date(),
	user: {
		_id: 'int',
		name: 'string',
		avatar: eval("require('../../assets/img/Chat2.png')"),
	},
};

const Message1 = {
	_id: extractedDataFromDatabase._id,
	text: extractedDataFromDatabase.text,
	createdAt: extractedDataFromDatabase.createdAt,
};
eval('Message1.user = ' + extractedDataFromDatabase.user);

useEffect(() => {
	setMessages([Message1]);
});
