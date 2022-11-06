import {
  Box,
  Button,
  LinkBox,
  Tab,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Modal from "./modal";
import Overlay from "./overlay";
import Unselectable from "./unselectable";

type TabItemProps = {
  title?: string;
  modalContent?: ReactNode;
  tooltip?: string;
  thumbnail: string;
  children?: ReactNode;
};

const TabItem = ({
  title,
  modalContent,
  thumbnail,
  tooltip,
  children,
}: TabItemProps) => {
  const [hover, SetHover] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setOverlay] = useState(<Overlay />);

  const toast = useToast();
  const toastId = `no-modal-toast-${title}`;
  return (
    <>
      {modalContent && (
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          {modalContent}
        </Modal>
      )}
      <Box
        w="100%"
        textAlign="center"
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
        onClick={() => {
          if (modalContent) {
            setOverlay(<Overlay />);
            onOpen();
          } else if (!toast.isActive(toastId)) {
            toast({
              id: toastId,
              title: `No modal available for ${title}.`,
              description: "Work in progresss!",
              status: "error",
              isClosable: true,
              duration: 5000,
              variant: "subtle",
              position: "bottom-right",
            });
          }
        }}
        css={{
          "&:active": {
            transform: "scale(0.85)",
            transition: "200ms ease",
          },
        }}
      >
        <Tooltip label={tooltip}>
          <LinkBox cursor="pointer">
            <Unselectable>
              <Image
                src={thumbnail}
                alt={title}
                // Resolution 1920x1080
                width="180"
                height="101.25"
                loading="lazy"
                style={
                  hover
                    ? {
                        transition: "200ms ease",
                        transform: hover ? "scale(0.85)" : "",
                      }
                    : { transition: "200ms ease" }
                }
              />
            </Unselectable>
            <Box
              color={useColorModeValue("black", "white")}
              css={{
                "&:hover": {
                  textDecoration: "none",
                  color: useColorModeValue("#3d7aed", "#ffdd99"),
                },
              }}
            >
              <Text mt={2} fontSize={14}>
                {children}
              </Text>
            </Box>
          </LinkBox>
        </Tooltip>
      </Box>
    </>
  );
};

type TabButtonProps = {
  children: ReactNode;
};

export const TabButton = ({ children }: TabButtonProps) => (
  <Button leftIcon={<AiOutlineDoubleRight />} borderRadius="lg" width="7.5rem">
    {children}
  </Button>
);

type TabHeaderProps = {
  children: ReactNode;
};

export const TabHeader = ({ children, ...props }: TabHeaderProps) => {
  const [active, SetActive] = useState<boolean>(false);
  return (
    <Tab
      _selected={{
        borderBottomColor: useColorModeValue("#525252", "#fff"),
        borderRadius: "2px",
        fontWeight: "bold",
        textColor: useColorModeValue("#000", "#fff"),
      }}
      onMouseDown={() => SetActive(true)}
      onMouseUp={() => SetActive(false)}
      css={{
        p: {
          transform: active ? "scale(0.85)" : "scale(1)",
          transition: "200ms ease",
        },
      }}
      {...props}
    >
      {children}
    </Tab>
  );
};

export default TabItem;