import assets from './assets';

const Services = [
	{
		id: 's-01',
		name: 'Hair Care',
		price: 4.25,
		description:
			'Haircare is essential not only for our appearance but also for our overall health. When you take proper care of your hair, it appears best while also ensuring the health of your hair and scalp. To keep your hair as healthy as possible, you should us, a respected salon and use our high-quality hair care products.',
		image: assets.hairstyling,
	},
	{
		id: 's-02',
		name: 'Manicures & Pedicures',
		price: 7.25,
		description:
			'A professional manicure & pedicure will always look after your cuticles. Moisturising foot and hand soak at the salon can be a wonderful experience. A foot bath, for example, has soft jets of delightfully perfumed warm water. The feet and hands are frequently moisturised with a soothing cream. You can select your favourite nail polish colours from a vast range available at the beauty spa, and skilled professionals apply the items expertly',
		image: assets.nails,
	},
	{
		id: 's-03',
		name: 'Facials and Skin Care',
		price: 18.25,
		description:
			'This could include a variety of treatments, such as exfoliation and a variety of masks. Facials & cleanup are necessary to maintain healthy, bright, and nourished skin. Because your face is exposed to sunshine, grime, and pollution, it is recommended that you get a facial clean up every other week at the very least. It removes debris, make-up, dirt, excess oil, and sweat from your skin. Facials also include hair bleaching, de-tan as well as other facial treatments.',
		image: assets.facials,
	},
	{
		id: 's-04',
		name: 'Massages',
		price: 24.25,
		description:
			"The peaceful, restful sleep you can get from an hour of body massage is unparalleled. This is the level of a relaxing massage that can help your body and mind. It reduces stress, pain, tension, and muscle soreness and improves circulation, energy, and alertness. If you feel tired or lazy, don't forget to book yourself a good relaxing body massage session with use.",
		image: assets.massages,
	},
	{
		id: 's-05',
		name: 'Waxing',
		price: 10.25,
		description:
			'Waxing is the most effective yet temporary method of hair removal that removes the hair at the root. New hairs do not grow back in the waxed area for up to eight weeks. Waxing can be done on almost any body part, including the eyebrows, face, bikini area, legs, arms, back, abdomen, and feet. ',
		image: assets.waxing,
	},
	{
		id: 's-06',
		name: 'Pre-Bridal Grooming',
		price: 20.25,
		description:
			"Pre-bridal grooming is all about body cleaning, facials & cleanup, getting extra hair waxed, exfoliating skin, and even making sure your nails are glossed to perfection. We offer different kinds of pre-bridal packages according to your wants and needs. If you're also about to get married, this is for you. ",
		image: assets.care,
	},
	{
		id: 's-07',
		name: 'Complementary Care',
		price: 20.25,
		description:
			"Pre-bridal grooming is all about body cleaning, facials & cleanup, getting extra hair waxed, exfoliating skin, and even making sure your nails are glossed to perfection. We offer different kinds of pre-bridal packages according to your wants and needs. If you're also about to get married, this is for you. ",
		image: assets.model,
	},
];

const Products = [
	{
		id: 'p-01',
		name: 'Parfum',
		longName: 'Fenty Eau de Parfum',
		price: 2200,
		description:
			'"THE EXPERIENCE, IT COMES AND GOES. BUT THE MEMORY CAN HOLD ONTO US FOR LIFE. AND A LOT OF THE TIME THE MEMORY OF THAT EXPERIENCE IS TRIGGERED BY SCENT.”',
		image: assets.eauDeParfum,
	},
	{
		id: 'p-02',
		name: 'Fenty Eau',
		longName: 'Fenty Eau de Parfum',
		price: 700,
		description:
			'What began as a garden walk in the global center of perfume became an unapologetic expression of my full and true essence. The experience begins as soon as you lay eyes on the bottle.',
		image: assets.fentyParfum,
	},
	{
		id: 'p-03',
		name: 'Lipstick',
		longName: 'Fenty Icon Velvet Liquid Lipstick ',
		price: 450,
		description:
			'Fall in love with a new kind of matte. The creamy, whipped texture hugs lips with intense color in one precise swipe. This unique formula leaves lips feeling plush and comfy and not dry.',
		image: assets.velvetLiquidLipstick,
	},
	{
		id: 'p-04',
		name: 'Blotting Powder',
		longName: 'Invisimatte Instant Setting + Blotting Powder',
		price: 525,
		description:
			'his instant mattifier just got even better—a refillable, universal finishing powder that blurs the look of pores, absorbs shine and extends makeup wear all day.',
		image: assets.blottingPowder,
	},
	{
		id: 'p-05',
		name: 'Brow Pencil',
		longName: 'Brow MVP Ultra Fine Brow Pencil & Styler',
		price: 340,
		description:
			'An ultra fine, retractable brow pencil made for hair-like precision, born in a groundbreaking range of 14 longwear, waterproof, smudge-resistant shades—plus a built-in paddle brush for effortless blending and styling.',
		image: assets.pencil,
	},
	{
		id: 'p-06',
		name: 'Cream',
		longName: 'Butta Drop Vanilla Dream Shimmering Whipped Oil Body Cream',
		price: 695,
		description:
			'Subtle rose gold pearl and a dreamy, warm vanilla scent link up in this limited-edition Butta Drop. The thick, rich, luxed-up body moisturizer buttas you up with a nourishing whipped oil cream loaded with nearly 25% rich butters and restorative tropical oils and extracts.',
		image: assets.vanillaWhippedCream,
	},
	{
		id: 'p-07',
		name: 'Skin Starter',
		longName: 'Fenty Skin Start’rs Full-Size Bundle',
		price: 1242.83,
		description:
			'Your best skin to the power of three: max-out your daily pore care with this clean, clinically-backed system that tightens the look of pores, brightens, hydrates, smooths—and improves—with every use.',
		image: assets.skinStarters,
	},
];

const ProfileDetials = [
	{
		id: 'd-01',
		name: 'My Appointments',
		icon: assets.appointment,
	},
	{
		id: 'd-02',
		name: 'My Orders',
		icon: assets.orders,
	},
	{
		id: 'd-03',
		name: 'My Wishlist',
		icon: assets.wishlist,
	},
	{
		id: 'd-04',
		name: 'Settings',
		icon: assets.setting,
	},
];

export { Services, Products, ProfileDetials };
