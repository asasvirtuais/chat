# ChatFeedLayout

A responsive 2x2 grid layout that combines a chat interface with a feed sidebar, perfect for building applications that need both real-time communication and activity streams.

## Layout Structure

The ChatFeedLayout is responsive with different behaviors:

### Desktop (md and up)
```
+------------------------+-------------+
|   Header + Messages    |             |
|        (2fr)           |    Feed     |
+------------------------+    (1fr)    |
|        Input           |             |
|        (2fr)           |             |
+------------------------+-------------+
```

### Mobile (base)
- **Default**: Feed is hidden, chat takes full width
- **Feed Open**: Chat is hidden, feed takes full width
- Toggle between views using the feed button in header menu

## Usage

```tsx
import { 
  ChatFeedLayout,
  ChatHeader,
  ChatMessages,
  ChatInput,
  Feed,
  FeedHeader,
  FeedItem
} from '@asasvirtuais/chat'

function App() {
  const [showFeed, setShowFeed] = useState(false)
  
  return (
    <ChatFeedLayout
      showFeed={showFeed}
      onToggleFeed={() => setShowFeed(!showFeed)}
      header={<ChatHeader>...</ChatHeader>}
      messages={<ChatMessages>...</ChatMessages>}
      input={<ChatInput>...</ChatInput>}
      feed={
        <Feed header={<FeedHeader title="Activity" />}>
          <FeedItem title="Update" subtitle="New feature" />
        </Feed>
      }
    />
  )
}
```

## Components

### ChatFeedLayout

Main responsive layout component with 2x2 grid structure.

**Props:**
- `header`: ReactNode - Chat header component
- `messages`: ReactNode - Chat messages area
- `input`: ReactNode - Chat input area
- `feed`: ReactNode - Feed sidebar content
- `showFeed?`: boolean - Control feed visibility (for mobile)
- `onToggleFeed?`: () => void - Toggle feed handler

### Feed

Scrollable container for feed items.

**Props:**
- `children`: ReactNode - Feed items
- `header?`: ReactNode - Optional header component
- `onClose?`: () => void - Close handler (passed from mobile layout)

### FeedHeader

Simple header for the feed section with mobile close button.

**Props:**
- `title?`: string - Header title (default: "Feed")
- `children?`: ReactNode - Additional header content
- `onClose?`: () => void - Close handler (shows close button on mobile)

### FeedItem

Individual feed entry component.

**Props:**
- `avatar?`: string - Avatar URL
- `title`: string - Item title
- `subtitle?`: string - Secondary text
- `timestamp?`: string - Time information
- `content?`: ReactNode - Additional content
- `onClick?`: () => void - Click handler

## Features

- **Responsive Design**: Adapts between desktop split view and mobile single view
- **Mobile Toggle**: Feed button in header menu for easy switching
- **Full Height**: Utilizes 100vh for immersive experience
- **Independent Scrolling**: Messages and feed scroll independently
- **Flexible Content**: All areas accept any React components
- **Feed Interactions**: Built-in support for clickable feed items
- **Simple Header**: Clean feed header with mobile close button

## Mobile Behavior

On mobile devices:
1. Feed is hidden by default with width 0
2. Clicking the feed button in HeaderMenu toggles between chat and feed
3. When feed is shown, chat is hidden and feed takes full width
4. Close button appears in FeedHeader on mobile for easy return to chat

## Example Implementation

See `/examples/chat-feed-app.tsx` for a complete working example with:
- Message sending functionality
- Dynamic feed updates
- State management
- Mobile responsive behavior