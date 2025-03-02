import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TextArea, Modal } from "semantic-ui-react";
import { Job } from "../../../domain/job";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import BlockUI from "../../../utils/block-ui";
import { createApplication } from "../../../features/applicationSlice";

interface JobDetailModalProps {
  open: boolean;
  handleClose: () => void;
  job: Job;
}
export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  open,
  handleClose,
  job,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, error } = useSelector(
    (state: RootState) => state.application
  );
  const [isApplyClick, setApplyClick] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showMessageModal, setShowMessageModal] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      setShowMessageModal(false);
      setApplyClick(false);
      handleClose();
    }
  }, [isSuccess, handleClose]);

  const handleApplyClick = () => {
    setApplyClick(true);
    setShowMessageModal(true);
  };

  const handleSendMessage = async () => {
    await dispatch(
      createApplication({
        message,
        userId: "ac4a17b4-2330-4105-a4b8-4a0127a6ff57",
        jobId: job.id,
        createdBy: "oogul",
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <BlockUI open={isLoading} message="Başvuru alınıyor" />
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="job-modal-title"
          aria-describedby="job-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 700,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              border: "none",
            }}
          >
            <Typography id="job-modal-title" variant="h5" fontWeight="bold">
              {job.title}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                  📍 {job.location}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  🏷 {job.category.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="bold">
                  İşveren:
                </Typography>
                <Typography variant="body1">{"oogul"}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {"oogul@gmail.com"}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Bu iş ilanı, deneyimli ve yetenekli profesyoneller için mükemmel
              bir fırsattır. İşin temel gereksinimleri arasında ilgili alanda
              uzmanlık, ekip çalışmasına yatkınlık ve problem çözme becerileri
              bulunmaktadır. İşveren, adaylardan yaratıcı çözümler
              geliştirmelerini ve projeleri zamanında teslim etmelerini
              beklemektedir. Ayrıca, çalışma ortamı son derece dinamik olup,
              çalışanlara kariyerlerinde ilerleme ve yeni beceriler kazanma
              fırsatı sunmaktadır. Eğer siz de bu özelliklere sahipseniz, hemen
              başvurun ve ekibimize katılma şansını yakalayın!
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }}>
              💰 ${job.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
              onClick={handleApplyClick}
            >
              {t("apply")}
            </Button>
          </Box>
          {showMessageModal && (
            <Modal
              open={showMessageModal}
              onClose={() => setShowMessageModal(false)}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 500,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                  border: "none",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Enter your message</Typography>
                <TextArea
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    minHeight: "150px",
                    fontSize: "1rem",
                    padding: "10px",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              </Box>
            </Modal>
          )}
        </Modal>
      )}
    </>
  );
};
