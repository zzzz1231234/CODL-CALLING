import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Clock, Phone, User, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';

const sampleCalls = [
  {
    title: "Lead Qualification Call",
    description: "Watch how our AI naturally qualifies a prospect",
    duration: "2:15",
    industry: "SaaS",
    type: "Qualification",
    audioUrl: "https://dl.dropboxusercontent.com/scl/fi/911p9iij1rdbbgfky53cx/6a2dd335-3c6e-4ce0-ad97-7f13bf8bbdf6-1731700072903-21ebd50e-93a0-4e26-b3c2-93b540edd2e8-stereo.mp3"
  },
  {
    title: "Objection Handling",
    description: "See how our AI handles common sales objections",
    duration: "1:45",
    industry: "Technology",
    type: "Negotiation",
    audioUrl: "https://dl.dropboxusercontent.com/scl/fi/z665l1zvledr9ooisttxr/91efa47c-ebf5-40a0-99b1-f5f139224580-1731612154949-5a100afd-73a4-4e0f-a2a3-8fe6277876c5-stereo.mp3"
  },
  {
    title: "Meeting Scheduling",
    description: "Experience seamless calendar coordination",
    duration: "2:30",
    industry: "Finance",
    type: "Scheduling",
    audioUrl: "https://dl.dropboxusercontent.com/scl/fi/sgtuoztdkz63som8mdlna/506fa352-114d-45aa-9b9d-d7ea5bb21ab3-1731699966968-9f2e68bf-928e-43f4-921a-218efd545f01-stereo.mp3"
  },
  {
    title: "Product Demo Booking",
    description: "Watch our AI secure a product demo",
    duration: "2:45",
    industry: "Healthcare",
    type: "Demo Booking",
    audioUrl: "https://dl.dropboxusercontent.com/scl/fi/hlhys9kihztkcdyxo1rqa/ae847c25-53b0-44b4-a8dd-29fd6a4d3636-1730111756832-254a0c96-ee18-4dab-a02f-335bfadcd433-mono_2.mp3"
  }
];

interface AudioState {
  isLoading: boolean;
  error: boolean;
  progress: number;
}

export function AudioSamples() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [audioStates, setAudioStates] = useState<AudioState[]>(
    sampleCalls.map(() => ({ isLoading: true, error: false, progress: 0 }))
  );
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize audio refs
    audioRefs.current = new Array(sampleCalls.length).fill(null);
    
    return () => {
      // Cleanup
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  const updateAudioState = (index: number, updates: Partial<AudioState>) => {
    setAudioStates(prev => prev.map((state, i) => 
      i === index ? { ...state, ...updates } : state
    ));
  };

  const handleLoadStart = (index: number) => {
    updateAudioState(index, { isLoading: true, error: false });
  };

  const handleCanPlay = (index: number) => {
    updateAudioState(index, { isLoading: false });
  };

  const handleError = (index: number) => {
    updateAudioState(index, { isLoading: false, error: true });
    if (playing === index) {
      setPlaying(null);
    }
  };

  const startProgressTracking = (index: number) => {
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
    }
    
    progressIntervalRef.current = window.setInterval(() => {
      const audio = audioRefs.current[index];
      if (audio) {
        const progress = (audio.currentTime / audio.duration) * 100;
        updateAudioState(index, { progress });
      }
    }, 100);
  };

  const stopProgressTracking = () => {
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const togglePlay = async (index: number) => {
    if (audioStates[index].error) return;

    try {
      const audio = audioRefs.current[index];
      if (!audio) return;

      if (playing === index) {
        audio.pause();
        setPlaying(null);
        stopProgressTracking();
      } else {
        // Stop any currently playing audio
        audioRefs.current.forEach((a, i) => {
          if (a && i !== index) {
            a.pause();
            a.currentTime = 0;
            updateAudioState(i, { progress: 0 });
          }
        });

        // Start new audio
        await audio.play();
        setPlaying(index);
        startProgressTracking(index);
      }
    } catch (error) {
      console.error('Playback error:', error);
      handleError(index);
    }
  };

  const handleEnded = (index: number) => {
    setPlaying(null);
    stopProgressTracking();
    updateAudioState(index, { progress: 0 });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            We've Cracked the <span className="text-gradient">Cold Calling</span> Code
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            This isn't another AI pipe dream. We've booked thousands of meetings using AI that sounds human—really human.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-dark-card px-6 py-3 rounded-full border border-neon-green/30">
              <span className="text-neon-green font-semibold">The Industry's Most Advanced AI Caller</span>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>Natural conversations that flow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>Real-time objection handling</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Don't Take Our Word For It</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Listen to actual calls. Compare us to any other AI solution.<br />
            We're so confident, we'll let our AI do the talking.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleCalls.map((call, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 overflow-hidden"
            >
              <div className="h-24 bg-dark-bg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-neon-green/30"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: playing === index ? 1 : 0.3,
                        transition: 'all 0.2s ease'
                      }}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => togglePlay(index)}
                  disabled={audioStates[index].isLoading || audioStates[index].error}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-colors group disabled:cursor-not-allowed"
                >
                  {audioStates[index].error ? (
                    <div className="flex flex-col items-center">
                      <AlertCircle className="w-12 h-12 text-red-500" />
                      <span className="text-sm text-red-500 mt-2">Audio unavailable</span>
                    </div>
                  ) : audioStates[index].isLoading ? (
                    <div className="w-12 h-12 border-4 border-neon-green border-t-transparent rounded-full animate-spin" />
                  ) : playing === index ? (
                    <Pause className="w-12 h-12 text-neon-green group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-12 h-12 text-neon-green group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{call.title}</h3>
                <p className="text-gray-400 mb-4">{call.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neon-green" />
                    <span className="text-sm">{call.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neon-green" />
                    <span className="text-sm">{call.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-neon-green" />
                    <span className="text-sm">{call.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-neon-green" />
                    <span className="text-sm">AI Agent</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <audio
                    ref={el => audioRefs.current[index] = el}
                    src={call.audioUrl}
                    onLoadStart={() => handleLoadStart(index)}
                    onCanPlay={() => handleCanPlay(index)}
                    onEnded={() => handleEnded(index)}
                    onError={() => handleError(index)}
                    muted={muted}
                  />
                  
                  {!audioStates[index].error && (
                    <>
                      <button
                        onClick={() => setMuted(!muted)}
                        className="p-2 hover:bg-neon-green/10 rounded-lg transition-colors"
                        disabled={audioStates[index].isLoading}
                      >
                        {muted ? (
                          <VolumeX className="w-5 h-5 text-neon-green" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-neon-green" />
                        )}
                      </button>
                      <div className="flex-grow bg-dark-bg rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-neon-green h-full rounded-full transition-all duration-100"
                          style={{ width: `${audioStates[index].progress}%` }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl font-medium mb-4">
            Your prospects won't know they're talking to AI.<br />
            <span className="text-neon-green">But your pipeline will.</span>
          </p>
          <div className="inline-block bg-neon-green/10 px-6 py-3 rounded-full border border-neon-green/30">
            <span className="font-semibold">The #1 AI Cold Calling Setup Provider in the Market!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}