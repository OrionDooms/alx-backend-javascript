/**
 * This program executed through command line.
 * The user should be able to input their name on a new line.
 */
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
	const Name = input.trim();
	process.stdout.write(`Your name is: ${Name}\n`);
});

process.stdin.on('end', function() {
	process.stdout.write('This important software is now closing\n');
});
