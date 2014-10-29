High Level Overview
===================

Core OS: services close to the hardware
 - power management
 - keychain access
 - sockets
 - kernel, etc
 - generally in C

Core Services: Object orientated layer on top of Core OS
 - higher level
 - Networking
 - Core Location
 - Threading, etc
 - doing system things at an object oriented level

Media:
 - Core Audio/Animation
 - PDF
 - Audio recording
 - Video playback
 - fundamentally a media device

Cocoa Touch: The UI layer
 - Multi-touch
 - Core Motion
 - Web View
 - Camera
 - Controls
 - High level objects

Xcode: IDE
Instruments: profiling your app

MVC: a strategy for organizing all the classes in your application.

Model: The "what" of your program
Controller: How the model is presented to the user (UI logic)
View: Your Controller's minions

How views communicate with controllers?
With delegates and target actions.

Models broadcast changes to anybody who is interested.


Objective-C
===========

Everything you can do in C you can do in Objective-C.

Every class has a header file (.h) and an implementation file (.m). The header
file is the public API.

`@import <className>` will import all public classes in library.
`#import <className>` will import only the class specified.

`strong` properties: keep the memory as long as I or anyone else has a strong
reference to it.

`weak` pointer: keep the memory in the heap as long as someone else has a
strong pointer to it.

`nonatomic` pointer: not thread safe. If you don't state `nonatomic` there
will be a lot of locking.

`synthesis` specifies the name of the variable we use to store the avlue of a
property.
