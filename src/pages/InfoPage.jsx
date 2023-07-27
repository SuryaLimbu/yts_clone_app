import React from "react";
import { FiCoffee, FiFilm, FiHeart, FiMessageSquare, FiStar } from "react-icons/fi";
import ReactReadMoreReadLess from "react-read-more-read-less";
const InfoPage = () => {

    return (
        <>
            <div className="bg-black/90 text-white">
                <div className="bg-[url('https://img.yts.mx/assets/images/movies/to_end_all_war_oppenheimer_the_atomic_bomb_2023/background.jpg')] h-auto bg-cover  pb-20 ">
                    <div className=" backdrop-blur-md h-auto w-full md:px-20 lg:px-80 text-white">
                        <div className="grid grid-cols-4 px-60 md:px-20 sm:px-0 pt-10">
                            <div className="mx-auto">
                                <img className="mb-2" src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-cover.jpg" alt="" srcset="" />
                                <div>
                                    <button type="button" className="w-full bg-green-600 py-2 font-semibold text-xl text-white mb-1 rounded-sm">Download</button>
                                    <button type="button" className="w-full bg-teal-600 py-2 font-semibold text-xl text-white mb-1 rounded-sm">Watch Now</button>
                                </div>
                            </div>
                            <div className="grid col-span-2 text-left md:pl-10">
                                <h1 className=" text-4xl font-bold"> My Best Friend Is a Vampire</h1>
                                <h1 className=" font-bold text-xl">1987</h1>
                                <h1 className="font-bold text-lg">Comedy/Horro</h1>
                                <span className=" font-semibold italic">
                                    Available in:
                                </span>
                                <button type="button">Download subsititle</button>
                                <table>
                                    <tr>
                                        <td><FiHeart /></td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td><FiCoffee /></td>
                                        <td>59% Audience</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FiFilm />
                                        </td>
                                        <td>6.0/10 </td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <h1 className=" font-semibold text-left mb-2">Similar movies</h1>
                                <div className="grid grid-cols-2">
                                    <div className="">
                                        <a href="http://">
                                            <img className="mb-2 w-20" src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-cover.jpg" alt="" srcset="" />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="http://">
                                            <img className="mb-2 w-20" src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-cover.jpg" alt="" srcset="" />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="http://">
                                            <img className="mb-2 w-20" src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-cover.jpg" alt="" srcset="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div></div>

                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="grid grid-cols-3 md:px-20 lg:px-80 py-4 space-x-0 ">
                        <img src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-screenshot2.jpg" alt="" srcset="" />
                        <img src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-screenshot2.jpg" alt="" srcset="" />
                        <img src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-screenshot2.jpg" alt="" srcset="" />
                    </div>

                </div>
                <div>
                    <div className="grid grid-cols-3 md:px-20 lg:px-80 py-6 space-x-0">
                        <div className="text-left col-span-2 ">

                            <h1 className=" font-bold text-xl pb-20">Plot Summary</h1>
                            <div className=" text-gray-200">
                                <p className="pb-20">After an encounter with a beautiful client, a teenage delivery boy finds himself being turned into a vampire.</p>
                                <span >
                                    <h1>Uploaded by: FREEMAN</h1>
                                    <h1>July 27, 2023 at 01:25 PM</h1>
                                </span>
                            </div>

                        </div>
                        <div className="text-left">
                            <h1 className=" text-xl font-bold">Director</h1>
                            <div className="flex pb-5">
                                <a href="http://" className="flex items-center">
                                    <img className="h-10 w-10 rounded-full " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" srcset="" />
                                    <h1 className="px-4">Jimmy Huston</h1>
                                </a>

                            </div>
                            <hr />
                            <h1 className=" text-xl font-bold">Top cast</h1>
                            <div className="flex">
                                <a href="http://" className="flex items-center">
                                    <img className="h-10 w-10 rounded-full " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" srcset="" />
                                    <h1 className="px-4">Jimmy Huston</h1>
                                </a>

                            </div>


                        </div>

                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 md:px-20 lg:px-80 py-10 space-x-0 gap-6 ">
                        <div>
                            <h1 className="flex items-center pb-10 font-bold text-xl"> <FiMessageSquare /> <span className="pl-4">Comments</span></h1>
                            <div className="bg-black grid grid-cols-6 p-4 rounded">
                                <div className="">
                                    <img className="h-14 w-14 rounded-full" src="https://img.yts.mx/assets/images/movies/my_best_friend_is_a_vampire_1987/medium-screenshot2.jpg" alt="" srcset="" />
                                </div>
                                <div className="grid grid-rows-2 col-span-5 text-left">
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-6 text-gray-400">
                                            <h1>surya</h1>
                                            <h1>July 08, 2021 at 05:54 am</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="pr-4"> 0</span>  <FiHeart className=" text-green-500" />
                                        </div>

                                    </div>
                                    <div>
                                        7/10 fun movie ! ?I study nuclear science, I love my classes, I got a crazy teacher, he wears dark glasses? LOL
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <h1 className="flex items-center pb-10 font-bold text-xl"> <FiStar /> <span className="pl-4">Movie Reviews</span></h1>
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="flex items-center"><span className="text-gray-400 pr-4">Reviewed by</span> BA_Harrison  <FiStar className="text-green-500 " /><span>6 / 10</span></h1>
                                    <h1 className=" font-semibold text-left">It's no The Lost Boys. Or Fright Night. Or Vamp. But it's fun enough.</h1>
                                    <p className=" text-gray-400 text-justify">
                                        <ReactReadMoreReadLess
                                            charLimit={200}
                                            readMoreText={"Read more ▼"}
                                            readLessText={"Read less ▲"}
                                        >

                                            High school student Jeremy Capello (Robert Sean Leonard) has a part time job at a grocery store; when he is asked to make a delivery to the old, seemingly abandoned Gardner mansion, he thinks it is a prank, but is surprised to find a sexy young woman living there, who invites him to come back at night.

                                            Despite amorous attention from hot cheerleader Candy (LeeAnne Locken), and having a crush on band nerd Darla (Cheryl Pollak), Jeremy is talked into returning to the house by his best friend Ralph (Evan Mirand), who thinks his pal should have some guilt-free sex with a stranger. As Jeremy is getting down to business with the sexy woman (Cecilia Peck), two men burst into the room brandishing weapons; Jeremy escapes and runs to where Ralph is waiting in his car, and the pair drive away. As Ralph pulls up outside Jeremy's home, he notices that his pal has been bitten on the neck...

                                            My Best Friend is a Vampire is an amiable and moderately amusing teen comedy horror that, whilst not exactly laugh out loud funny or in any way scary, is still an entertaining piece of '80s nonsense. Informed that he has become a vampire by mentor Modoc (Rene Auberjonois), Jeremy must come to terms with drinking blood while trying not to take a bite from Darla when on a date; he must also convince Ralph that, even though he's a bloodsucker, he's still his best friend and means him no harm. Meanwhile, the two men who surprised him at the mansion - vampire hunters Professor Leopold McCarthy (David Warner) and his assistant Grimsdyke (Paul Wilson) - are convinced that Ralph is the vampire and plan to stake him through the heart.

                                            With lots of car chases, plenty of '80s pop songs (including The Future's So Bright, I Gotta Wear Shades by Timbuk 3 - tune!), bad fashion (Darla's hats!), and enjoyable performances (future Oscar Winner Kathy Bates plays Darla's mother!), My Best Friend is a Vampire provides an easy-going hour-and-a-half of harmless throwback fun.

                                            5.5/10, rounded up to 6 for IMDb.
                                        </ReactReadMoreReadLess>
                                    </p>
                                    <hr  className="border-gray-400 my-4"/>
                                </div>
                                <div>
                                    <h1 className="flex items-center"><span className="text-gray-400 pr-4">Reviewed by</span> BA_Harrison  <FiStar className="text-green-500 " /><span>6 / 10</span></h1>
                                    <h1 className=" font-semibold text-left">It's no The Lost Boys. Or Fright Night. Or Vamp. But it's fun enough.</h1>
                                    <p className=" text-gray-400 text-justify">
                                        <ReactReadMoreReadLess
                                            charLimit={200}
                                            readMoreText={"Read more ▼"}
                                            readLessText={"Read less ▲"}
                                        >

                                            High school student Jeremy Capello (Robert Sean Leonard) has a part time job at a grocery store; when he is asked to make a delivery to the old, seemingly abandoned Gardner mansion, he thinks it is a prank, but is surprised to find a sexy young woman living there, who invites him to come back at night.

                                            Despite amorous attention from hot cheerleader Candy (LeeAnne Locken), and having a crush on band nerd Darla (Cheryl Pollak), Jeremy is talked into returning to the house by his best friend Ralph (Evan Mirand), who thinks his pal should have some guilt-free sex with a stranger. As Jeremy is getting down to business with the sexy woman (Cecilia Peck), two men burst into the room brandishing weapons; Jeremy escapes and runs to where Ralph is waiting in his car, and the pair drive away. As Ralph pulls up outside Jeremy's home, he notices that his pal has been bitten on the neck...

                                            My Best Friend is a Vampire is an amiable and moderately amusing teen comedy horror that, whilst not exactly laugh out loud funny or in any way scary, is still an entertaining piece of '80s nonsense. Informed that he has become a vampire by mentor Modoc (Rene Auberjonois), Jeremy must come to terms with drinking blood while trying not to take a bite from Darla when on a date; he must also convince Ralph that, even though he's a bloodsucker, he's still his best friend and means him no harm. Meanwhile, the two men who surprised him at the mansion - vampire hunters Professor Leopold McCarthy (David Warner) and his assistant Grimsdyke (Paul Wilson) - are convinced that Ralph is the vampire and plan to stake him through the heart.

                                            With lots of car chases, plenty of '80s pop songs (including The Future's So Bright, I Gotta Wear Shades by Timbuk 3 - tune!), bad fashion (Darla's hats!), and enjoyable performances (future Oscar Winner Kathy Bates plays Darla's mother!), My Best Friend is a Vampire provides an easy-going hour-and-a-half of harmless throwback fun.

                                            5.5/10, rounded up to 6 for IMDb.
                                        </ReactReadMoreReadLess>
                                    </p>
                                    <hr  className="border-gray-400 my-4"/>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default InfoPage;