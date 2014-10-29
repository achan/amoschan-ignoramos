View Controller Lifecycle
=========================


`viewDidLoad`: after instantiation and outlet setting. Similar to
normal objects' `init` method.

only called once in the lifetime of your controller

bounds of view are not finalized -- beware of geometry code.

`viewWillAppear`: just before the view appears on screen

view will load once, but can appear many times. do not put one-time
initialization code here.

use to sync your view with things that may have changed while view as
offscreen.

you can put expensive operations here to optimize operations that are only
necessary when the view will appear (as opposed to loaded and never shown).

still not the best place for geo code because your bounds can still change
afterwards (rotate).

`viewWillDisappear`: put code to remember what's going on. cleanup code.

`view{Will,Did}LayoutSubviews`: manually layout views that can't be handled by
Autolayout.






