import React, { ReactNode, createContext, useContext, useReducer } from 'react';

interface UiState {
  isToast: boolean;
}

type UiAction = { type: 'showToast' } | { type: 'hideToast' };

const UiContext = createContext<UiState | null>(null);
const UiDispatchContext = createContext<React.Dispatch<UiAction> | null>(null);

function UiProvider({ children }: { children: ReactNode }) {
  const [uiState, dispatch] = useReducer(uiReducer, initialUiState);

  return (
    <UiContext.Provider value={uiState}>
      <UiDispatchContext.Provider value={dispatch}>{children}</UiDispatchContext.Provider>
    </UiContext.Provider>
  );
}

export function useUi(): UiState {
  const context = useContext(UiContext);

  if (context === null) {
    throw new Error('useUi must be used within a UiProvider');
  }

  return context;
}

export function useUiDispatch() {
  const context = useContext(UiDispatchContext);

  if (context === null) {
    throw new Error('useUiDispatch must be used within a UiProvider');
  }

  return context;
}

function uiReducer(state: UiState, action: UiAction) {
  switch (action.type) {
    case 'showToast': {
      return {
        ...state,
        isToast: true,
      };
    }
    case 'hideToast': {
      return {
        ...state,
        isToast: false,
      };
    }
    default: {
      throw new Error('Unknown action: ' + (action as any).type);
    }
  }
}

const initialUiState: UiState = { isToast: false };

export default UiProvider;
