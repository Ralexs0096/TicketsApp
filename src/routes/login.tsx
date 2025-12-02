import { createFileRoute, redirect } from '@tanstack/react-router';
import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress
} from '@mui/material';
import { authQueryOptions } from '../queries/auth';
import { apiClient } from '../apiClient';

const fallback = '/' as const;

export const Route = createFileRoute('/login')({
  validateSearch: (search) => ({
    redirect: (search.redirect as string) || fallback
  }),
  beforeLoad: async ({ context, search }) => {
    const session = await context.queryClient.ensureQueryData(authQueryOptions);

    if (session.user) {
      throw redirect({
        to: search.redirect || fallback
      });
    }
  },

  component: LoginComponent
});

function LoginComponent() {
  const navigate = Route.useNavigate();
  const { queryClient } = Route.useRouteContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await apiClient.auth.login({
        body: {
          email: username,
          password
        }
      });

      await queryClient.invalidateQueries({
        queryKey: ['auth', 'session']
      });

      await queryClient.fetchQuery(authQueryOptions);

      navigate({
        to: '/',
        replace: true
      });
    } catch {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 3,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Sign In
        </Typography>

        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 2 }}>
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
}
