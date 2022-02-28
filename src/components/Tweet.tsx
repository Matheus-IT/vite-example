type TweetProps = {
	content: string;
}

export function Tweet(props: TweetProps) {
	return (
		<p>{props.content}</p>
	);
}