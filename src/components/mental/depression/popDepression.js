import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

export default function PopDepression() {
  return (
    <div className="relative isolate overflow-hidden bg-white lg:overflow-visible mt-4">
      <div className="mx-auto grid max-w-4xl lg:items-start lg:gap-y-10">
        <div className="lg:mx-auto lg:w-full">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is Depression
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Depression is a mental health condition that involves struggling
            with low mood, altered pleasure and enjoyment that affects how
            someone feels and behaves.
          </p>
        </div>

        <div className="lg:mx-auto lg:w-full lg:max-w-7xl">
          <div className="text-base leading-7 text-gray-700">
            <p>
              Having Low mood doesn’t mean that someone has depression, we all
              experience low mood but when it starts to interferes with your
              daily life and takes weeks to months it turns into depression.
              <br /> <br />
              As depression has level of severity it also has different types
              which are the followings
            </p>
            <ul role="list" className="mt-8 text-gray-600">
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  Persistent depressive disorder
                  </strong>{" "}
                  This is depression type that lasts for 2 years or more. 
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  Seasonal affective disorder
                  </strong>{" "}
                  This is depression type that occurs at a particular time of year.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                  Antenatal depression
                  </strong>{" "}
                  This is depression that happens when someone is pregnant, it is sometimes called prenatal depression.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Postnatal depression
                  </strong>{" "}
                  This is depression that happens in first years after having a baby.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Premenstrual dysphoric disorder
                  </strong>{" "}
                  This is hormonal related disorder that affects someone’s feelings.
                </span>
              </li>
            </ul>
            <p className="mt-8">
            Depression as a life threatening condition it has causes and for human being as everyone is unique the causes may be different from person to person, among some common depression causes includes the followings
            </p>
            <ul role="list" className="mt-8 text-gray-600">
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  Childhood trauma
                  </strong>{" "}
                  Having history of childhood trauma and difficulties like being neglected, family conflicts, sexual, emotional or physical abuse leads to depression and this also kills someone’s self -esteem and due to low esteem it become difficult to cope with life stressors
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  Stressful life events
                  </strong>{" "}
                  Some people develop depression due to very stressful life events that makes them feel like trapped in fences including Loosing Job, bankruptcy, Relationship problems, being bullied, major life changes like giving birth or getting married.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Poor situation analyzing
                  </strong>{" "}
                  Depression can develop when someone is being preoccupied with negative thoughts that happened to him/her and starts to blame him/herself for what happened, these judgements kills someone’s mood and feelings.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Having other mental health problems
                  </strong>{" "}
                  Developing other mental health problems like anxiety, psychotic disorder, behavioral disorder can trigger depression because coping with these can be a difficult situation for you and develop depression.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Physical health problems
                  </strong>{" "}
                  Some physical health problems which most of the time are chronic become too big for someone to manage and leads to depression where someone doesn’t have hope for tomorrow as they may be struggling with chronic or painful conditions ex: liver disease, kidney, cancer.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Genetics
                  </strong>{" "}
                  Even though there is no specific gene that cause depression but research show that if your close family member has depression you also have chance to develop it, this may be due to learning from them how they cope and how they behave, and due to that environmental experience and biology someone develop depression.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Problems with sleep, diet 
                  </strong>{" "}
                  When someone is not able to sleep properly and eat healthy food it can affect his/her mood and this makes someone vulnerable to depression.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                <strong className="font-semibold text-gray-900">
                Medications
                  </strong>{" "}
                  Some depression can develop due to medication’s side effect and that’s why if medication will last longer needs to be checked well by your doctor.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Depression has different symptoms which are as follows 
            </h2>
            <p className="mt-3">
            As every person is unique the symptoms also may be different according to person and those symptoms are in 2 forms:
            </p>
            <ul role="list" className="text-gray-600">
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  How someone feels
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                  How someone behaves
                  </strong>
                </span>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
