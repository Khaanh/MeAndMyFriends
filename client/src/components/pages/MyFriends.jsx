import { useState } from "react";
import dataFriends from "../../data/myFriendsData.json";

const MyFriends = () => {
	const [readMore, setReadMore] = useState(null);

	const handleReadMore = (id) => {
		setReadMore(id !== readMore ? id : null);

		// setReadMore(id);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-14 mb-8">
			{dataFriends.length > 0 &&
				dataFriends.map((friend) => (
					<div key={friend.id}>
						<div className="mb-3 h-80">
							<img
								src={friend.image}
								className="rounded-lg border-slate-300 object-cover object-center h-full w-full"
								alt={friend.name}
							/>
						</div>
						<h1 className="text-2xl font-medium mb-4 italic">
							{friend.name.toUpperCase().replace("-", " ")}
						</h1>
						<div>
							<p className="font-light italic text-lg">
								{readMore === friend.id
									? friend.biography
									: `${friend.biography.slice(0, 200)}...`}
							</p>
							<button onClick={() => handleReadMore(friend.id)}>
								Read more
							</button>
						</div>
					</div>
				))}

			{dataFriends > 0 && "asdsa"}
		</div>
	);
};

export default MyFriends;
