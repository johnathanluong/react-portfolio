require('dotenv').config();

const portfolioData = [
	{
		cover: 'misu/cover/misuCover.png',
		title: 'MiSu v4',
		description: 'Mi casa es Su casa - The Smart Home Access Control Sharing Mobile App.',
		detailedDescription:
			"<p>MiSu is a mobile app designed to provide homeowners with more control and security over their smart home devices by allowing them to selectively share access with others, such as house sitters, pet sitters, or visitors. Traditionally, smart home devices offer an all-or-nothing sharing mechanism, which can compromise security when granting access to critical devices like locks or alarms. MiSu addresses this by allowing homeowners to grant tailored access to specific devices, revoke permissions, and monitor activity, giving them greater peace of mind. The app also differentiates itself from competitors like Ring and August Smart Lock by offering these advanced security features, including the ability to revoke or modify permissions at any time.</p><p>As Johnathan's Senior Design Capstone project, Johnathan worked in a 5 man team to diligently develop this idea into reality. Through the use of React Native Expo, TypeScript, AWS Amplify, AWS IoT Core, and Home Assistant hosted on Raspberry Pi; this project came to a successful finish in December 2024.</p><p>MiSu is designed with privacy and security at its core. By requiring only minimal user information—such as name, email, phone number, and date of birth—the app ensures that personal data is protected. It also implements robust security measures, including encrypted data storage, to prevent unauthorized access. The quick, reactive nature of the app is powered through websockets built into the AWS Lambda functions that power the backend functions of the app. With a low-cost, user-friendly interface, MiSu is positioned to empower smart device owners to confidently share access while safeguarding their privacy. As the app is developed by future teams, further research and development will continue to refine its features and expand its use cases across various industries.</p>",
		url: 'https://www.youtube.com/embed/yxE-uQYt204',
		images: ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'],
		portLink: 'misu',
		id: 1
	},
	{
		cover: 'mindGame/cover/cat.png',
		title: 'Mind Game',
		description:
			"A journey set in the recesses of your mind! Regain your lost memories, fight monsters within, and connect with those you've forgotten!",
		detailedDescription:
			"<p>An engrossing top-down 2D turn-based RPG built in Unity using C#. Focused on the journey to regain his lost memories, we follow an amnesiac exploring his mind. All whilst encountering old faces, fighting monsters using rhythmic combat, and traversing through the worlds conjured up by his sub-conscious.</p><p>Mind Game was created for the class, AI for Game Programming at UCF. With a 3 month time limit, our group of 5 people were able to successfully craft a detail rich experience that I truly cherish. My team: Marc Cross, Leah Howells, Lana Perkins, and cinderspectacular are all very talented and hard-working people who made this project possible.</p><p>My role was to develop the overworld components including but not limited to: movement, enemy encounters, world design, interactable NPCs, enemy movement AI, the user interface, and camera movement. Due to the small team, we each had involvement in each other's roles to a degree. I helped in tuning the combat and dialogue systems as well. </p>",
		url: 'https://github.com/johnathanluong/Mind-Game-Fork/',
		portLink: 'mindGame',
		id: 2,
		images: []
	},
	{
		cover: 'mySteamList/cover/cover.png',
		title: 'MySteamList.com',
		description:
			'Your one-stop shop to manage your Steam game lists! Finally... a solution to whittling down the backlog!',
		images: ['images/image1.png', 'images/image2.png', 'images/image3.png'],
		detailedDescription:
			"<p>A web application used to manage your Steam game lists! Users can create customizable lists in which they can add games to, share to other users, and curate to their heart's desire.</p><p>My work was primarily in the API side of things, allowing the front-end team interact with the back-end. I also had a hand in the database work. We pull game data off Steam using their official web API and formatted it to fit the purposes of our website.</p><p>Built by a group of 7 people, my team consisted of: Chris Gagnier, Jack Wilson, James Allen, Jacob Riesterer, Sam Cooper, and Peyton Miller.</p>",
		portLink: 'mySteamList',
		id: 3
	},
	{
		cover: 'minesweeper/cover/minesweeper.png',
		title: 'Minesweeper',
		description: 'The classic game of Minesweeper built using JavaScript, HTML, and CSS.',
		detailedDescription:
			'<p>A web-based implementation of the classic game Minesweeper. The objective is to clear a rectangular board containing hidden mines without detonating any of them, with help from clues about the number of neighboring mines in each field.</p><p>This project was built using JavaScript for the game logic, HTML for the structure, and CSS for the visual styling. It features a responsive design, allowing for seamless gameplay on various screen sizes.</p><p>Throughout the development process, I focused on creating clean and efficient code, ensuring optimal performance and maintainability. The project helped me enhance my skills in web development, particularly in JavaScript programming and DOM manipulation.</p>',
		url: 'https://johnathanluong.github.io/minesweeper/',
		images: ['images/image1.png', 'images/image2.png', 'images/image3.png'],
		portLink: 'minesweeper',
		id: 4
	}
];

const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

connection.connect((err) => {
	if (err) {
		console.error('Error connecting to db', err.stack);
		return;
	}

	console.log('Successfully connected to db');
});

portfolioData.forEach((item) => {
	const { id, title, description, detailedDescription, url, portLink, cover, images } = item;

	const insertPorfolioQuery = `
    INSERT INTO portfolio (id, title, description, detailedDescription, url, portLink, cover)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

	connection.query(
		insertPorfolioQuery,
		[id, title, description, detailedDescription, url, portLink, cover],
		(err, results) => {
			if (err) {
				console.error('Error inserting into portfolio table: ', err.stack);
				return;
			}

			console.log('Insertion successful: ', results);
		}
	);

	images.forEach((imageURL) => {
		const imageQuery = `
        INSERT INTO images (portfolio_id,  image_url)
        VALUES(?, ?)
        `;

		connection.query(imageQuery, [id, imageURL], (err, results) => {
			if (err) {
				console.error('Error inserting into images table: ', err.stack);
				return;
			}

			console.log('Insertion successful: ', results);
		});
	});
});

connection.end();
