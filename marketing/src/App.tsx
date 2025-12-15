import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Marketing } from './pages/Marketing';
import { Home } from './pages/Home';
import { Communities } from './pages/Communities';
import { Kuppi } from './pages/Kuppi';
import { Resources } from './pages/Resources';
import { Events } from './pages/Events';
import { Tools } from './pages/Tools';
import { Profile } from './pages/Profile';
import { Messages } from './pages/Messages';
export function App() {
  return <BrowserRouter>
      <Routes>
        {/* Marketing website as default */}
        <Route path="/" element={<Marketing />} />

        {/* Main app routes */}
        <Route path="/app" element={<MainLayout>
              <Home />
            </MainLayout>} />
        <Route path="/app/communities" element={<MainLayout>
              <Communities />
            </MainLayout>} />
        <Route path="/app/kuppi" element={<MainLayout>
              <Kuppi />
            </MainLayout>} />
        <Route path="/app/resources" element={<MainLayout>
              <Resources />
            </MainLayout>} />
        <Route path="/app/events" element={<MainLayout>
              <Events />
            </MainLayout>} />
        <Route path="/app/tools" element={<MainLayout>
              <Tools />
            </MainLayout>} />
        <Route path="/app/messages" element={<MainLayout>
              <Messages />
            </MainLayout>} />
        <Route path="/app/profile" element={<MainLayout>
              <Profile />
            </MainLayout>} />
      </Routes>
    </BrowserRouter>;
}