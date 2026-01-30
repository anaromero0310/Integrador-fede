import React, { useState } from 'react';
import { ChevronLeft, Search, Calendar, Home, Book, User, MapPin, Phone, Clock, X, Plus } from 'lucide-react';

const BeautyBookingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedService, setSelectedService] = useState(null);

  // Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="text-center text-gray-400 text-sm py-3">
        Pantalla de Inicio de Sesión
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-12 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='80' rx='80' ry='40' fill='%23f9a8d4' opacity='0.3'/%3E%3Cpath d='M 60 80 Q 100 100 140 80 Q 140 110 100 130 Q 60 110 60 80 Z' fill='url(%23grad)'/%3E%3Cpath d='M 70 75 Q 85 85 100 75 Q 115 85 130 75' stroke='black' stroke-width='3' fill='none' opacity='0.8'/%3E%3C/svg%3E" alt="Eyelash" className="w-24 h-24" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div className="text-right">
              <button className="text-sm text-pink-500 hover:text-pink-600">
                Forgot your password?
              </button>
            </div>
            
            <button
              onClick={() => setCurrentScreen('home')}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-medium hover:from-pink-600 hover:to-pink-700"
            >
              Log In
            </button>
            
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Home Screen
  const HomeScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="mb-6">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar servicios"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Hola, Isabella</h2>
        </div>

        <div className="mb-6 bg-pink-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 20 80 40 Q 80 55 50 70 Q 20 55 20 40 Z' fill='%23ec4899'/%3E%3Cpath d='M 30 38 Q 50 30 70 38' stroke='black' stroke-width='2' fill='none' opacity='0.6'/%3E%3C/svg%3E" alt="Eye" className="w-24 h-20 rounded-lg" />
            <div className="flex-1">
              <p className="font-semibold mb-1">Próxima reserva</p>
              <p className="text-sm text-gray-600">Cita para Volumen Híbrido</p>
              <p className="text-sm text-gray-600">12 de jun., 10:00 AM</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg mb-4">Servicios populares</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <div className="min-w-[120px]">
              <div className="bg-pink-100 rounded-xl p-4 mb-2 h-24 flex items-center justify-center">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 20 80 40 Q 80 55 50 70 Q 20 55 20 40 Z' fill='%23ec4899'/%3E%3Cpath d='M 30 38 Q 50 30 70 38' stroke='black' stroke-width='2' fill='none' opacity='0.6'/%3E%3C/svg%3E" alt="Lashes" className="w-16" />
              </div>
              <p className="text-sm font-medium">Lifting de Pestañas</p>
            </div>
            <div className="min-w-[120px]">
              <div className="bg-purple-100 rounded-xl p-4 mb-2 h-24 flex items-center justify-center">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 15 80 40 Q 80 60 50 75 Q 20 60 20 40 Z' fill='%23a855f7'/%3E%3Cpath d='M 25 38 Q 50 25 75 38' stroke='black' stroke-width='2.5' fill='none' opacity='0.7'/%3E%3C/svg%3E" alt="Volume" className="w-16" />
              </div>
              <p className="text-sm font-medium">Volumen Ruso</p>
            </div>
            <div className="min-w-[120px]">
              <div className="bg-pink-50 rounded-xl p-4 mb-2 h-24"></div>
              <p className="text-sm font-medium">Mantenimiento</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Calendario</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Julio 2024</h4>
              <div className="flex gap-2">
                <button className="p-1">&lt;</button>
                <button className="p-1">&gt;</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              <div className="text-gray-400">S</div>
              <div className="text-gray-400">M</div>
              <div className="text-gray-400">T</div>
              <div className="text-gray-400">W</div>
              <div className="text-gray-400">T</div>
              <div className="text-gray-400">F</div>
              <div className="text-gray-400">S</div>
              {[...Array(31)].map((_, i) => (
                <div key={i} className={`py-2 ${i === 4 ? 'bg-pink-500 text-white rounded-full' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="home" setScreen={setCurrentScreen} />
    </div>
  );

  // Service Selection Screen
  const ServiceSelectionScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => setCurrentScreen('home')} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Nueva Reserva</h1>
        </div>

        <h2 className="text-lg font-bold mb-4">Selecciona un servicio</h2>

        <div className="flex gap-4 mb-6 border-b">
          <button className="pb-2 border-b-2 border-pink-500 font-medium">Todos</button>
          <button className="pb-2 text-gray-500">Clases</button>
          <button className="pb-2 text-gray-500">Eventos</button>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Lifting de Pestañas', duration: '60 min' },
            { name: 'Volumen Ruso', duration: '90 min' },
            { name: 'Híbrido', duration: '120 min' },
            { name: 'Mantenimiento', duration: '45 min' }
          ].map((service, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedService(service.name);
                setCurrentScreen('booking-details');
              }}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-pink-500"
            >
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 20 80 40 Q 80 55 50 70 Q 20 55 20 40 Z' fill='%23ec4899'/%3E%3C/svg%3E" alt="Service" className="w-12 h-12 rounded-lg" />
              <div className="flex-1">
                <p className="font-semibold">{service.name}</p>
                <p className="text-sm text-gray-500">{service.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentScreen('booking-details')}
          className="w-full mt-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-full font-medium"
        >
          Siguiente ▸
        </button>
      </div>
    </div>
  );

  // Booking Details Screen
  const BookingDetailsScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => setCurrentScreen('service-selection')} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Detalles de la Reserva</h1>
        </div>

        <h2 className="text-2xl font-bold mb-6">Extensiones de Pestañas Volumen Ruso</h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Fecha</span>
            <span className="font-medium">Sábado, 15 de julio</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Hora</span>
            <span className="font-medium">2:00 PM</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Duración</span>
            <span className="font-medium">2 horas</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-600">Costo</span>
            <span className="font-medium">$120</span>
          </div>
          <div className="py-3 border-b">
            <span className="text-gray-600 block mb-2">Detalles / Notas</span>
            <p className="text-sm text-gray-500">
              Llegue al menos 5 minutos antes para rellenar la tarjeta de cliente si es necesario. 24 horas de cancelación requeridas para reembolso completo
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="w-full h-48 bg-gray-200 rounded-xl mb-2 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-gray-400">
              Map placeholder
            </div>
          </div>
          <p className="text-sm font-medium">Elegance Beauty Studio, New York</p>
        </div>

        <button
          onClick={() => setCurrentScreen('my-bookings')}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-full font-medium mb-4"
        >
          Cancelar Reserva
        </button>
        <button
          onClick={() => setCurrentScreen('my-bookings')}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-full font-medium"
        >
          Contactar al Proveedor
        </button>
      </div>

      <BottomNav active="reservas" setScreen={setCurrentScreen} />
    </div>
  );

  // My Bookings Screen
  const MyBookingsScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => setCurrentScreen('home')} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">My Bookings</h1>
        </div>

        <h2 className="text-lg font-bold mb-4">Upcoming</h2>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 20 80 40 Q 80 55 50 70 Q 20 55 20 40 Z' fill='%23ec4899'/%3E%3C/svg%3E" alt="Service" className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Booking #12345</p>
              <p className="font-bold mb-1">Next Appointment: Russian Volume</p>
              <p className="text-sm text-gray-600">Saturday, June 15 · 10:00 AM</p>
              <button className="mt-2 px-4 py-1 border border-gray-300 rounded-full text-sm">
                Cancel ✕
              </button>
            </div>
          </div>

          <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 25 80 40 Q 80 55 50 70 Q 20 55 20 40 Z' fill='%23a855f7'/%3E%3C/svg%3E" alt="Service" className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Booking #67890</p>
              <p className="font-bold mb-1">Next Appointment: Maintenance</p>
              <p className="text-sm text-gray-600">Sunday, June 16 · 2:00 PM</p>
              <button className="mt-2 px-4 py-1 border border-gray-300 rounded-full text-sm flex items-center gap-1">
                Reschedule <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">Past</h2>

        <div className="space-y-4">
          <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Cpath d='M 20 40 Q 50 22 80 40 Q 80 55 50 68 Q 20 55 20 40 Z' fill='%23ec4899'/%3E%3C/svg%3E" alt="Service" className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">Booking #54321</p>
              <p className="font-bold mb-1">Past Appointment: Maintenance</p>
              <p className="text-sm text-gray-600">Saturday, June 8 · 11:00 AM</p>
              <button className="mt-2 px-4 py-1 border border-gray-300 rounded-full text-sm flex items-center gap-1">
                Rebook <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="bookings" setScreen={setCurrentScreen} />
    </div>
  );

  // Profile Screen
  const ProfileScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => setCurrentScreen('home')} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Perfil</h1>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mb-4 flex items-center justify-center text-white text-3xl font-bold">
            SR
          </div>
          <h2 className="text-xl font-bold">Sophia Rossi</h2>
          <p className="text-gray-500">sophia.rossi@email.com</p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="font-bold text-lg">Información</h3>
          
          <div className="flex items-center gap-3 py-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Número de teléfono</p>
              <p className="font-medium">+1(631)987-4543</p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Dirección</p>
              <p className="font-medium">123 Main Street</p>
              <p className="text-sm text-gray-500">Hill Oak Avenue, Anytown</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="font-bold text-lg">Ajustes</h3>
          
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 text-gray-400">🔔</div>
              <span>Notificaciones</span>
            </div>
            <div className="w-12 h-6 bg-gray-200 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5 shadow"></div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>Temas</span>
            </div>
            <span className="text-gray-500">Claro</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <button className="w-full text-center py-3 text-gray-600 hover:text-gray-800">
            Cerrar Sesión
          </button>
        </div>
      </div>

      <BottomNav active="profile" setScreen={setCurrentScreen} />
    </div>
  );

  // Bottom Navigation Component
  const BottomNav = ({ active, setScreen }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <button
          onClick={() => setScreen('home')}
          className={`flex flex-col items-center ${active === 'home' ? 'text-pink-500' : 'text-gray-400'}`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">Inicio</span>
        </button>
        <button
          onClick={() => setScreen('service-selection')}
          className={`flex flex-col items-center ${active === 'reservar' ? 'text-pink-500' : 'text-gray-400'}`}
        >
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-xs">Reservar</span>
        </button>
        <button
          onClick={() => setScreen('my-bookings')}
          className={`flex flex-col items-center ${active === 'bookings' ? 'text-pink-500' : 'text-gray-400'}`}
        >
          <Book className="w-6 h-6 mb-1" />
          <span className="text-xs">Mis Reservas</span>
        </button>
        <button
          onClick={() => setScreen('profile')}
          className={`flex flex-col items-center ${active === 'profile' ? 'text-pink-500' : 'text-gray-400'}`}
        >
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />;
      case 'home':
        return <HomeScreen />;
      case 'service-selection':
        return <ServiceSelectionScreen />;
      case 'booking-details':
        return <BookingDetailsScreen />;
      case 'my-bookings':
        return <MyBookingsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <LoginScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default BeautyBookingApp;