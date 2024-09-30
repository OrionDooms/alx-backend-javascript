/**
 * This program executed through command line.
 * The user should be able to input their name on a new line.
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
	const Name = input.trim();
	console.log(`Your name is: ${Name}`);
	process.stdin.end();
});

process.stdin.on('end', function() {
	process.stdout.write('This important software is now closing\n');
});
